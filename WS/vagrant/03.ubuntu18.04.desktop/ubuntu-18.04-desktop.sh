mkdir ubuntu-18.04-desktop-amd64
cd ubuntu-18.04-desktop-amd64
vagrant init peru/ubuntu-18.04-desktop-amd64
#VAGRANT_DEFAULT_PROVIDER=libvirt vagrant up
# or
VAGRANT_DEFAULT_PROVIDER=virtualbox vagrant up
vagrant ssh
