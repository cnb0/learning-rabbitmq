Running and maintaining a system successfully requires a good understanding of its components along with the various utilities that can be used to troubleshoot problems occurring in any of these components


- General troubleshooting approach
- Problems with starting/stopping the RabbitMQ nodes
- Problems with message delivery


As RabbitMQ instances run on top of the Erlang virtual machine, we can leverage the troubleshooting utilities provided by Erlang to troubleshoot problems occurring in the message broker. 

The variety of errors occurring may range from problems relating to starting/stopping the broker instance to performance issues—we already covered performance tuning and monitoring 
 
 top-down approach to troubleshoot issues:
    - Check the status of a particular node.
            $ rabbitmqctl  -n instance1 status
             you can observe a lot of useful information,:
                - RabbitMQ message broker version
                - Erlang distribution
                - Operating system
                - RabbitMQ Erlang applications along with their versions

    - Inspect RabbitMQ logs.
        The RabbitMQ logs are located in the logs directory by default in the RabbitMQ installation directory in /var/log/rabbitmq

        - This location can be changed by setting the RABBITMQ_LOG_BASE environment variable. 
        - You can inspect the error logs for more detailed errors that are related to either the particular instance or in regard to communication with other nodes in the cluster. 
        - The RabbitMQ logs can be rotated using the rabbitmqctl utility with the rotate_logs command. Along with the RabbitMQ log file for the node, there is an alternative log file (ending with an SASL suffix), which is generated by the Erlang SASL (System Architecture Support Libraries) application libraries that provide different forms of logging reports, including crash reports.
    - Check the RabbitMQ community mailing list or ask in the IRC chat.
    - Use Erlang utilities to troubleshoot a particular node.


- Problems with starting/stopping RabbitMQ nodes
- Problems with message delivery

        In certain broker configurations, it may happen that the messages are not delivered as expected. This could either be due to 
                - a misconfigured queue TTL, or a poor network combined with the lack of publisher confirms, or 
                - AMQP transactions to support reliable delivery. 
                - To inspect what is going on with messages in the broker, you can install the Firehose  plugin that allows you to inspect the traffic flowing through the message broker. 
                - You should be careful when enabling the plugin in a production environment as it may slow down the performance due to the additional messages that it sends to the amq.rabbitmq.trace exchange for each message entering the broker and each message exiting it. The plugin is enabled for a particular node and vhost. The RabbitMQ Tracer plugin builds on top of the Firehose plugin and provides a user interface to capture and trace messages.