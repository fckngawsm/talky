FROM node:20-alpine

WORKDIR /app

COPY package.json lerna.json yarn.lock tsconfig.base.json tsconfig.json ./

COPY packages/shared/nats-module/package.json ./packages/shared/nats-module/
COPY packages/core/chat-service/package.json ./packages/core/chat-service/

RUN cd packages/core/chat-service && yarn install

COPY packages/shared/nats-module/ ./packages/shared/nats-module/
COPY packages/core/chat-service/ ./packages/core/chat-service/

RUN cd packages/shared/nats-module && yarn install

CMD ["yarn", "dev"]
