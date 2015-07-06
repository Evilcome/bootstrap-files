FROM node

MAINTAINER Evilcome

RUN mkdir /src

WORKDIR /src
ADD test-app/package.json /src/package.json
RUN npm install

# Expose port
EXPOSE  8005

CMD node test-app/index.js
