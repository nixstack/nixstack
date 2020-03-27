docker rm -f $(docker ps -a | gawk '{print $1}')
docker rmi -f $(docker images | grep  "<none>" | gawk '{print $3}')
