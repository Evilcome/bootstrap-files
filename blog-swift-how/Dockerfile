FROM node

MAINTAINER Evilcome

RUN mkdir /src/app

WORKDIR /src/app

## ADD mesimers/package.json /src

RUN npm install --production

# Expose port
EXPOSE  8001

CMD ["npm", "start", ""--production"]
