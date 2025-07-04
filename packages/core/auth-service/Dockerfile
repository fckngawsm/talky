FROM node:20-alpine

WORKDIR /app

COPY package.json lerna.json yarn.lock ./

COPY packages/shared/nats-module/package.json ./packages/shared/nats-module/
COPY packages/core/auth-service/package.json ./packages/core/auth-service/

RUN cd packages/core/auth-service && yarn install --frozen-lockfile


COPY packages/shared/nats-module/ ./packages/shared/nats-module/
COPY packages/core/auth-service/ ./packages/core/auth-service/

RUN cd packages/shared/nats-module && yarn install

CMD ["yarn", "dev"]
