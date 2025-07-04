FROM node:20-alpine

WORKDIR /app

COPY package.json lerna.json yarn.lock ./

COPY packages/shared/nats-module/package.json ./packages/shared/nats-module/
COPY packages/core/user-service/package.json ./packages/core/user-service/

RUN cd packages/core/user-service && yarn install --frozen-lockfile


COPY packages/shared/nats-module/ ./packages/shared/nats-module/
COPY packages/core/user-service/ ./packages/core/user-service/

RUN cd packages/core/user-service && yarn build

CMD ["yarn", "dev"]

