Vagrant basic commands
start box: vagrant up
ssh into box: vagrant ssh
shutdown box: vagrant halt
suspend box: vagrant suspend
destroy box: vagrant destroy


Typing `vagrant` from the command line will display a list of all available commands.

Be sure that you are in the same directory as the Vagrantfile when running these commands!

# Creating a VM
- `vagrant init`           -- Initialize Vagrant with a Vagrantfile and ./.vagrant directory, using no specified base image. Before you can do vagrant up, you'll need to specify a base image in the Vagrantfile.
- `vagrant init <boxpath>` -- Initialize Vagrant with a specific box. To find a box, go to the [public Vagrant box catalog](https://app.vagrantup.com/boxes/search). When you find one you like, just replace it's name with boxpath. For example, `vagrant init ubuntu/trusty64`.

# Starting a VM
- `vagrant up`                  -- starts vagrant environment (also provisions only on the FIRST vagrant up)
- `vagrant resume`              -- resume a suspended machine (vagrant up works just fine for this as well)
- `vagrant provision`           -- forces reprovisioning of the vagrant machine
- `vagrant reload`              -- restarts vagrant machine, loads new Vagrantfile configuration
- `vagrant reload --provision`  -- restart the virtual machine and force provisioning

# Getting into a VM
- `vagrant ssh`           -- connects to machine via SSH
- `vagrant ssh <boxname>` -- If you give your box a name in your Vagrantfile, you can ssh into it with boxname. Works from any directory.

# Stopping a VM
- `vagrant halt`        -- stops the vagrant machine
- `vagrant suspend`     -- suspends a virtual machine (remembers state)

# Cleaning Up a VM
- `vagrant destroy`     -- stops and deletes all traces of the vagrant machine
- `vagrant destroy -f`   -- same as above, without confirmation

# Boxes
- `vagrant box list`              -- see a list of all installed boxes on your computer
- `vagrant box add <name> <url>`  -- download a box image to your computer
- `vagrant box outdated`          -- check for updates vagrant box update
- `vagrant boxes remove <name>`   -- deletes a box from the machine
- `vagrant package`               -- packages a running virtualbox env in a reusable box

# Saving Progress
-`vagrant snapshot save [options] [vm-name] <name>` -- vm-name is often `default`. Allows us to save so that we can rollback at a later time

# Tips
- `vagrant -v`                    -- get the vagrant version
- `vagrant status`                -- outputs status of the vagrant machine
- `vagrant global-status`         -- outputs status of all vagrant machines
- `vagrant global-status --prune` -- same as above, but prunes invalid entries
- `vagrant provision --debug`     -- use the debug flag to increase the verbosity of the output
- `vagrant push`                  -- yes, vagrant can be configured to [deploy code](http://docs.vagrantup.com/v2/push/index.html)!
- `vagrant up --provision | tee provision.log`  -- Runs `vagrant up`, forces provisioning and logs all output to a file

# Plugins
- [vagrant-hostsupdater](https://github.com/cogitatio/vagrant-hostsupdater) : `$ vagrant plugin install vagrant-hostsupdater` to update your `/etc/hosts` file automatically each time you start/stop your vagrant box.

# Notes
- If you are using [VVV](https://github.com/varying-vagrant-vagrants/vvv/), you can enable xdebug by running `vagrant ssh` and then `xdebug_on` from the virtual machine's CLI.




# Vagrant Cheat Sheet

## add image

### local

    $ vagrant box add {title} {url}
    $ vagrant init {title}
    $ vagrant up

### public ([publicly available catalog of Vagrant boxes](https://atlas.hashicorp.com/boxes/search))

    $ vagrant box add ubuntu/precise64
    $ vagrant init ubuntu/precise64
    $ vagrant up

## connect

    $ vagrant ssh {name}

## remove @ virtualbox level

    $ vagrant destroy

## remove @ vagrant level

    $ vagrant box remove {title}

## list boxes

    $ vagrant box list

## provisioning

    $ vagrant provision

## export vagrant image

run script to compress Ubuntu: https://gist.github.com/carlessanagustin/2fb92e88f2068300a2ed

    $ vagrant package --output package.box

# 2. Vagrantfile cheat sheet

## port forwarding

    # host:port >> guest:port
    zipi.vm.network "forwarded_port", host: 8080, guest: 80, auto_correct: true

## mount folders and permissions
    zipi.vm.synced_folder ".", "/vagrant",
      owner: "vagrant",
      group: "vagrant",
      mount_options: ["dmode=775,fmode=664"]

## network
    zipi.vm.network "private_network",
        ip: "192.168.32.10",
        virtualbox__intnet: true,
        auto_config: true

## provider
    config.vm.provider "virtualbox" do |vb|
        vb.memory = 512
        vb.cpus = 1
        #vb.gui = true
    end

## provisioning: inline

* Option 1:

```
config.vm.provision "shell", inline: "apt-get update && apt-get -y upgrade"
```

* Option 2:

```
$script = <<SCRIPT
apt-get update
apt-get -y upgrade
SCRIPT

Vagrant.configure("2") do |config|
  config.vm.provision "shell", inline: $script
end
```

## provisioning: shell

```
config.vm.provision :shell, :path => "vagrant-bootstrap.sh"
```

## provisioning: ansible

    config.vm.provision "ansible" do |ansible|
      ansible.playbook = "provision-ansible/install.yml"
      
      ansible.verbose = 'vvvv'
      
      ansible.host_key_checking = false
      ansible.sudo = true
        
      ansible.tags = ['base', 'ansible']
      #ansible.skip_tags = ''
    
      # STATIC INVENTORY
      #ansible.inventory_path = "provision-ansible/hosts/all"
      #ansible.limit = 'vagrant'
        
      # AUTO-GENERATED INVENTORY
      ansible.groups = {
        "group1" => ["zipi"],
        "all_groups:children" => ["group1"],
        #"group1:vars" => { "vagrant_enable" => true }
      }

      ansible.extra_vars = {
          ansible_ssh_user: 'vagrant',
          vagrant_enable: true
          }
    end

## launching 2 machines

    config.vm.define "zipi" do |zipi|
        zipi.vm.host_name = "zipi"
        zipi.vm.box = "ubuntu/trusty64"
        zipi.vm.network "private_network", ip: "192.168.32.10", virtualbox__intnet:     true, auto_config: true
    end
    config.vm.define "zape" do |zape|
        zape.vm.host_name = "zape"
        zape.vm.box = "ubuntu/trusty64"
        zape.vm.network "private_network", ip: "192.168.32.11", virtualbox__intnet:     true, auto_config: true
    end

