# user setup
sudo rabbitmqctl add_user cc-admin taxi123
sudo rabbitmqctl set_user_tags cc-admin administrator
sudo rabbitmqctl change_password guest guest123
sudo rabbitmqctl add_user cc-dev taxi123
sudo rabbitmqctl add_vhost cc-dev-vhost
sudo rabbitmqctl set_permissions -p cc-dev-vhost cc-admin ".*" ".*" ".*"
sudo rabbitmqctl set_permissions -p cc-dev-vhost cc-dev ".*" ".*" ".*"
