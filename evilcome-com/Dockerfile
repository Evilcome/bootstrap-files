FROM ubuntu

MAINTAINER Evilcome

# Install Node.js and other dependencies
RUN apt-get update && \
    apt-get -y install curl && \
    curl -sL https://deb.nodesource.com/setup | sudo bash - && \
    apt-get -y install python build-essential nodejs

# Install nodemon
RUN npm install -g nodemon

RUN mkdir /test-app

VOLUME [/test-app]

RUN cd /test-app && npm install

# Define working directory
WORKDIR /test-app

# Expose port
EXPOSE  8005

# Run app using nodemon
CMD ["nodemon", "/test-app/index.js"]
