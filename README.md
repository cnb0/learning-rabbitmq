## learning-rabbitmq - ADVANCED MESSAGE QUEUING WITH RABBIT MQ 
  - Journey towards Cloud Native Microservices 
  - local OS install(baremetal) -> VM -> docker -> docker-compose -> minikube -> k8s on cloud(GCP/Azure)

### Highlights (Advanced RabbitMQ) - Duration: 5 days : 
    - 18+ Modules
    - 12+ labs (offline/online)
    - Ubuntu/Linux 20.04
    - Vagrant(VM)
    - docker/docker-compose( Containers)
    - minikube(k8s)
    - Google GKE/Azure Cloud (VM/k8s)
    - RabbitMQ Cluster Kubernetes Operator
    - Cloud Native Microservices
    - Chaos Engineering
    - DevOps ( CICD )
    - Nodejs microservices
    - python/IPython/go/ruby/js - langauge bindings
    - Clustering HAProxy
    - Monitoring Prometheus/Grafana
    - Performance testing
    - RabbitMQ Internals,
    - RabbitMQ Plugins/CLI/WebUI/REST
    - Best Practices RabbitMQ
    - AMPQ Spec
    - Security SSL
    - Troubleshooting Best Practices
 
```
1. Introduction to RabbitMQ
            - Who’s using RabbitMQ, and how?
            - The advantages of loosely coupled architectures
            - Decoupling your application
            - Setting up the required folders
            - Operating system considerations
            - Downloading and installing RabbitMQ
        Bonus - local install ubunutu(apt-get), VM install(Vagrant), docker, docker-compose,
                minikube, on cloud (k8s,VM)

2. Understanding messaging
            - The role of a consumer
            - The role of a producer
            - Bindings consumers and producers
            - Messages and durability
            - How to verify delivery

3. Administering RabbitMQ
            - Starting and stopping nodes
            - RabbitMQ configuration files
            - How to manage privileges
            - Viewing statistics and analyzing logs
            - Sending alerts
            - How to set up parallel processing
        Bonus - minikube k8s, Docker, Docker Compose
              

4. A programmer perspective
            - Installing and configuring Node.js
            - Understanding Node.js
            - Javascript and the amqplib client library
            - Sending and receiving messages using javascript on Node.js
         Bonus - DevOps Node CI/CD lifecycle and practices  
               - NodeJs MicroServices
               
5. Message patterns for developers via exchange routing
            - Simple message routing using the direct exchange
            - Creating the application architecture
            - Creating the RPC worker
            - Writing a simple RPC publisher
            - Broadcasting messages via the fanout exchange
            - Selectively routing messages with the topic exchange
            - Selective routing with the headers exchange
            - Exchange-to-exchange routing
            - Routing messages with the consistent-hashing exchange

6. Detailed analysis and usage of amqplib
            - Details about amqplib - the javascript client library
            - The usage with javascript
            - How to deal with failure
            - Exceptions and promises
            - Understanding flow control
            - The argument handling
            - The connect phase
            - ChannelModel and CallbackModel
            - Declaring and using Channels
            - Writing robust code
            - Guidelines of usage

7. High availability using clustering
            - Architecture of a cluster
            - Queues in a cluster
            - Setting up a test cluster
            - Distributing the nodes to more machines
            - How to preserve messages: mirrored queues
            - Understanding best practices
        - Bonus - Docker , docker-compose based HA Cluster
                - Google GKE , Azure 

8. Implementing failover and replication
            - Setting up a load balancer-based master/slave
            - Installing the Shovel plugin
            - Configuring and running Shovel
            - Installing and configuring HAProxy
            - Failing javascript clients between servers

9. Scaling RabbitMQ between datacenters
            - Understanding the goal of the federation plugin
            - Installing and configuring the federation plugin
            - Active-passive/Active-active high-availability clustering
            - Understanding best practices

10. Web tools to administer RabbitMQ
            - The RabbitMQ Management plugin
            - Managing RabbitMQ from the web console
            - Administering users from the web console
            - Managing queue from the web console
            - Using the CLI

11. RabbitMQ and the REST API
            - REST API features
            - Accessing statistics
            - vhost and user provisioning

12. Monitoring and securing RabbitMQ
            - Message durability and Message acknowledgement
            - Memory usage and process limits
            - Setting up SSL    
