FROM node:0.10

MAINTAINER Evilcome

RUN mkdir /src

WORKDIR /src

ADD mesimers/package.json /src/package.json

RUN npm install --production

# Expose port
EXPOSE  2368

CMD node mesimers/index.js
