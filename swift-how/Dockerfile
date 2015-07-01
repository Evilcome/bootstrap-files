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
RUN rm -rf <git repo name>; true
RUN git clone https://github.com/Evilcome/swift-how-site.git
RUN cd /swift-how-site && npm install

# Define working directory
WORKDIR /swift-how-site

# Expose port
EXPOSE  8003

# Run app using nodemon
CMD ["nodemon", "/swift-how-site/index.js"]