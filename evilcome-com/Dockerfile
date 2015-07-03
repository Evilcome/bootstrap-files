FROM node

MAINTAINER Evilcome

RUN mkdir /src

WORKDIR /src
ADD evilcome-com/test-app/package.json /src/package.json
RUN npm install

# Expose port
EXPOSE  8005

CMD node evilcome-com/test-app/index.js
