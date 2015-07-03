FROM node

MAINTAINER Evilcome

RUN mkdir /src

WORKDIR /src
ADD swift-how/app/package.json /src/package.json
RUN npm install

# Expose port
EXPOSE  8003

CMD node swift-how/app/index.js
