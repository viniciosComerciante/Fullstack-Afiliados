RUN ["chmod", "+x", ".docker/entrypoint.sh"]

FROM node:lts-alpine

RUN apk add --no-cache bash

RUN npm install -g @nestjs/cli
RUN npm install prisma -D

USER node

WORKDIR /home/node/app
