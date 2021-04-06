const config = require('./config')
const kafka = require("kafka-node")
const client = new kafka.KafkaClient(config.kafka_server)

const Consumer = kafka.Consumer
const consumer = new Consumer(client, [{
  topic: config.kafka_topic,
  offset: 0
}], {
  autoCommit: true
});

consumer.on('message', function (message) {
  console.log(message);
});

consumer.on('error', function (err) {
  console.log('Error:', err);
})

consumer.on('offsetOutOfRange', function (err) {
  console.log('offsetOutOfRange:', err);
})