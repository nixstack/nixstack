# Install node

curl --silent --location https://rpm.nodesource.com/setup_10.x | sudo bash
yum install -y nodejs

curl -sL https://deb.nodesource.com/setup_10.x | bash -
apt-get install -y nodejs

# Docker

docker rm -f $(docker ps -a | gawk '{print $1}')
docker rmi -f $(docker images | grep  "<none>" | gawk '{print $3}')

# Firewall

firewall-cmd --list-all
firewall-cmd --zone=public --add-port=8118/tcp --permanent
firewall-cmd --reload

# ISSUE

- ERROR: (iptables failed: iptables --wait -t nat -A DOCKER -p tcp -d 0/0 --dport 80 -j DNAT --to-destination 172.26.0.2:80 ! -i br-7860d076d796: iptables: No chain/target/match by that name.
  (exit status 1))

- ERROR: Execution of PostgreSQL by a user with administrative permissions is not permitted
- runas /user:postgres cmd.exe(https://stackoverflow.com/questions/24341767/execution-of-postgresql-by-a-user-with-administrative-permissions-is-not-permitt)

# Linux shell

netstat -ntulp | grep 3000
ps -ef | grep mysqld
kill -9 18844

# Migrate DB

pg_dump -U username -f filename databasename
psql -U postgres -d desintationdb -f dumpfilename.sql
