FROM node:20-alpine

WORKDIR /app

COPY package.json lerna.json yarn.lock ./

COPY packages/shared/configs/package.json ./packages/shared/configs/
COPY packages/shared/nats-module/package.json ./packages/shared/nats-module/
COPY packages/core/api/package.json ./packages/core/api/

RUN cd packages/core/api && yarn install --frozen-lockfile

COPY packages/shared/configs/ ./packages/shared/configs/
COPY packages/shared/nats-module/ ./packages/shared/nats-module/
COPY packages/core/api/ ./packages/core/api/

RUN cd packages/shared/nats-module && yarn install

CMD ["yarn", "dev"]

EXPOSE 3003
