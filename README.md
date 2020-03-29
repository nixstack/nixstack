docker rm -f $(docker ps -a | gawk '{print $1}')
docker rmi -f $(docker images | grep  "<none>" | gawk '{print $3}')

# Firewall
firewall-cmd --list-all
firewall-cmd --zone=public --add-port=8118/tcp --permanent
firewall-cmd --reload

# ISSUE

- ERROR: (iptables failed: iptables --wait -t nat -A DOCKER -p tcp -d 0/0 --dport 80 -j DNAT --to-destination 172.26.0.2:80 ! -i br-7860d076d796: iptables: No chain/target/match by that name.
  (exit status 1))
