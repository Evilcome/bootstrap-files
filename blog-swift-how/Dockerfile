FROM node:0.10-onbuild

MAINTAINER Evilcome

RUN mkdir /src

WORKDIR /src

ADD mesimers/package.json /src/package.json

RUN npm install --production

# Expose port
EXPOSE  8001

CMD node mesimers/index.js
