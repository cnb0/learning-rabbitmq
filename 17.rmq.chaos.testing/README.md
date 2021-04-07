# ChaosTestingCode
Code for doing chaos testing on RabbitMq distributed messaging systems.

## Folders guide


### RabbitMQ
Code for blog post:
- https://jack-vanlightly.com/blog/2018/9/10/how-to-lose-messages-on-a-rabbitmq-cluster

Now legacy code. More advanced code is being worked on in the RabbitMqUdn folder.

### RabbitMqUdn
A more advanced, fully automated version of the RabbitMQ folder, using the UDN feature of Blockade to simplify deploying a cluster.
The code is primarily focused on testing RabbitMQ 3.8 features of quorum queues and single active consumer. But also has support for mirrored queues.



