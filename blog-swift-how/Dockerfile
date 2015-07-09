FROM node

MAINTAINER Evilcome

VOLUME mesimers:/src/app

WORKDIR /src/app

RUN npm install --production

# Expose port
EXPOSE  8001

CMD npm start --production
