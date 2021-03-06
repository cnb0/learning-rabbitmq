require('../setup').Init('Publish Subscribe Consumer.');
var orderService = require('./orderService');
var connect = require('amqp').createConnection();

connect.on('ready', function() {
    var ex = connect.exchange('shop.exchange', {type: 'direct', confirm:true});
    var q = connect.queue('shop.queue', {durable:true, autoDelete:false});

    q.on('queueDeclareOk', function(args) {
        q.bind('shop.exchange', 'order.key');
        q.on('queueBindOk', function() {
            q.subscribe({ack:true}, function(message) {
                var service = new orderService(message.data);
                var status = service.ProcessOrder();
                if (status === 'OrderComplete') {
                   var exf = connect.exchange('shop.fanout.exchange', {type: 'fanout'});
                   exf.setMaxListeners(0);
                   exf.publish('', service.Order);
                }
                q.shift();
                console.log('INFO, Remove order from queue.');
            });
        });
    });
});