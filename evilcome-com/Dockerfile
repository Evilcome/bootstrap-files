FROM ubuntu

MAINTAINER Evilcome

# Install Node.js and other dependencies
RUN apt-get update && \
    apt-get -y install curl && \
    curl -sL https://deb.nodesource.com/setup | sudo bash - && \
    apt-get -y install python build-essential nodejs

# Install nodemon
RUN npm install -g nodemon

# Define working directory
WORKDIR /test-app

RUN npm install

# Expose port
EXPOSE  8005

# Run app using nodemon
CMD ["nodemon", "index.js"]
