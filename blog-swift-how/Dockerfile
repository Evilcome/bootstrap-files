FROM node

MAINTAINER Evilcome

VOLUME /projects/mesimers:/src/app

WORKDIR /src/app

ADD /projects/mesimers/package.json ./

RUN npm install --production

# Expose port
EXPOSE  8001

CMD npm start --production
