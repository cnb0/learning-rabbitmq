
# rabbitmq-cheatsheet


- [RabbitMQ CLI](https://www.rabbitmq.com/cli.html)

RabbitMQ ships with multiple command line tools:

    - rabbitmqctl            - service management and general operator tasks
    - rabbitmq-diagnostics   - diagnostics and health checking
    - rabbitmq-plugins       - plugin management
    - rabbitmq-queues        - maintenance tasks on queues, in particular quorum queues
    - rabbitmq-upgrade       - maintenance tasks related to upgrades
    - rabbitmqadmin          - operator tasks over HTTP API
    - rabbitmq-collect-env   - collects relevant cluster and environment information as well as server  logs.  
    
     they can be found under the sbin directory in installation root.


## rabbitmqctl

* rabbitmqctl list_queues
* rabbitmqctl cluster_status
* rabbitmqctl report
* rabbitmqctl status


### vhost

* $ rabbitmqctl add_vhost [vhost_name]

* $ rabbitmqctl delete_vhost [vhost_name]

* $ rabbitmqctl list_vhost [vhost_name]

### permissions

* $ rabbitmqctl set_permissions [-p \<vhost\>] \<user\> \<conf\> \<write\> \<read\>

  e.g: rabbitmqctl set_permission -p sycamore xiaochen ".\*" ".\*" ".\*"

### stop

* $ rabbitmqctl stop [-n \<node\>]

## service rabbitmq-server

* $ service rabbitmq-server start

  \# start the service

* $ service rabbitmq-server stop

  \# stop the service

* $ service rabbitmq-server restart

  \# restart the service

* $ service rabbitmq-server status

  \# check the status

* $ ls -altr /var/log/rabbitmq/*







