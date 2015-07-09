FROM node

MAINTAINER Evilcome

VOLUME /root/projects/mesimers:/src/app

ADD /root/projects/mesimers/package.json /src/app/package.json

WORKDIR /src/app

RUN npm install --production

# Expose port
EXPOSE  8001

CMD npm start --production
