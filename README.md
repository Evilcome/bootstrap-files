# bootstrap-files
![Docker Compose Support](https://img.shields.io/badge/docker--compose-powered-brightgreen.svg)

A docker-compose example of personal sites.

## Prepare
- make sure you have docker installed and start docker service
- install git
- install docker compose
	
	```sh
	curl -L https://github.com/docker/compose/releases/download/1.3.1/docker-compose-`uname -s`-`uname -m` > /usr/local/bin/docker-compose
	chmod +x /usr/local/bin/docker-compose
	```

## Deployment
```sh
git clone https://github.com/Evilcome/bootstrap-files.git
cd bootstrap-files
docker-compose up
```