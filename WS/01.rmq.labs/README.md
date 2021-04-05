# RabbitMQ 
**Build distributed and scalable applications with message queuing using RabbitMQ**

 
RabbitMQ is an open source message queuing software that acts as a message broker using the Advanced Message Queuing Protocol (AMQP). This book will help you to get to grips with RabbitMQ to build your own applications with a message queue architecture. You’ll learn from the experts from CloudAMQP as they share what they've learned while managing the largest fleet of RabbitMQ clusters in the world.

  covers the following exciting features: 
* Get well versed with RabbitMQ’s message queue architecture and features
* Discover the benefits of RabbitMQ, AMQP, and message queuing
* Install and configure RabbitMQ and its plugins
* Get to grips with the management console features and controls
* Understand how queue and exchange types differ and when and how to use them

 

The code will look like the following:

```
connection = Bunny.new ENV['RABBITMQ_URI']
# Start a session with RabbitMQ 
connection.start
```

**Following is what you need for these labs:**
  RabbitMQ   is a valuable resource on open-source message queue architecture. Even those already familiar with microservices and messaging will discover value in reading this book for an exploration of moving forward with best practices and resource efficiency. T 
With the following software and hardware list you can run all code files .

### Software and Hardware List

| Chapter  | Software required                   | OS required                        |
| -------- | ------------------------------------| -----------------------------------|
| 1  to 6      |Python 2.7, Ruby 2.7 and A web browser | Mac OS X, and Linux (Any) |
 

RabbitMQ can be set up on your own machine, which is described here. Another option is to skip the hassle of the installation and configuration and use a hosted RabbitMQ solution. CloudAMQP is the largest provider of hosted RabbitMQ clusters, and free setups are availbale at: www.cloudamqp.com.

we have the docker setup similar to that defined in the Docker compose file. You shuold
review the file before running docker-compose up. There are default usernames and passwords in this file used to
connect to the broker. You should change these defaults as they are easy to guess if testing in an insecure space.

 

  
 