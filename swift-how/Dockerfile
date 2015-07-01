FROM ubuntu

MAINTAINER Evilcome

# Install Node.js and other dependencies
RUN apt-get update && \
    apt-get -y install curl && \
    curl -sL https://deb.nodesource.com/setup | sudo bash - && \
    apt-get -y install python build-essential nodejs git

# Install nodemon
RUN npm install -g nodemon

# Try to remove the repo if it already exists
RUN rm -rf <git repo name>; true
RUN git clone <remote git repo>
RUN cd <git repo name> && npm install

# Define working directory
WORKDIR <git repo name>

# Expose port
EXPOSE  8003

# Run app using nodemon
CMD ["nodemon", "<git repo name>/index.js"]