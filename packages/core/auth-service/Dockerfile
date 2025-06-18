FROM node:20

WORKDIR /app

COPY package.json lerna.json yarn.lock ./

COPY packages/shared/configs/package.json ./packages/shared/configs/
COPY packages/shared/nats-module/package.json ./packages/shared/nats-module/
COPY packages/core/auth-service/package.json ./packages/core/auth-service/

RUN yarn install --frozen-lockfile

COPY packages/shared/configs/ ./packages/shared/configs/
COPY packages/shared/nats-module/ ./packages/shared/nats-module/
COPY packages/core/auth-service/ ./packages/core/auth-service/

RUN cd packages/shared/nats-module && yarn install && yarn build

CMD ["yarn", "dev"]

EXPOSE 3003
