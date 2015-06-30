FROM ubuntu

MAINTAINER Evilcome

# Install Node.js and other dependencies
RUN apt-get update && \
    apt-get -y install curl && \
    curl -sL https://deb.nodesource.com/setup | sudo bash - && \
    apt-get -y install python build-essential nodejs git

# Install nodemon
RUN npm install -g nodemon

# Clone the swift-how project
RUN git clone gogs@git.lyitlove.com:evilcome/swift-how.git
RUN cd /swift-how && npm install

# Define working directory
WORKDIR /swift-how
# ADD . /src

# Expose port
EXPOSE  8003

# Run app using nodemon
CMD ["nodemon", "/swift-how/app.js"]