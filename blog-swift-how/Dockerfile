FROM node

MAINTAINER Evilcome

RUN mkdir /src

WORKDIR /src/app

ADD mesimers/package.json /src/app

RUN npm install --production

# Expose port
EXPOSE  8001

CMD ["npm", "start", ""--production"]
