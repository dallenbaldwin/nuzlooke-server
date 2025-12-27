FROM node:jod
WORKDIR /app
COPY package*.json ./
RUN npm install
# set the jwt secret at build time
RUN echo JWT_SECRET="$(cat /proc/sys/kernel/random/uuid)" > .env
COPY ./ .
