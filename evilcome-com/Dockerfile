FROM ubuntu

MAINTAINER Evilcome

# Install Node.js and other dependencies
RUN apt-get update && \
    apt-get -y install curl && \
    curl -sL https://deb.nodesource.com/setup | sudo bash - && \
    apt-get -y install python build-essential nodejs

# Install nodemon
RUN npm install -g nodemon

VOLUME ~/bootstrap-files/evilcome-com/test-app:/app

# Define working directory
WORKDIR /app

RUN ll

RUN npm install

# Expose port
EXPOSE  8005

# Run app using nodemon
CMD ["nodemon", "/app/index.js"]
