FROM node

MAINTAINER Evilcome

VOLUME /root/projects/mesimers:/src/app

WORKDIR /src/app

RUN npm install --production

# Expose port
EXPOSE  8001

CMD npm start --production
