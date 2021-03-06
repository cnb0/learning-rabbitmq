require('../setup').Init('Publish Subscribe Send Email.');
var orderService = require('./orderService');
var connect = require('amqp').createConnection();

connect.on('ready', function() {
    var ex = connect.exchange('shop.fanout.exchange', {type: 'fanout'});
    var q = connect.queue('shop.email.queue');
    q.on('queueDeclareOk', function(args) {
        q.bind('shop.fanout.exchange', '');
        q.on('queueBindOk', function() {
            q.subscribe(function(message) {
                var service = new orderService(message.data);
                service.SendEmail();
            });
        });
    });
});