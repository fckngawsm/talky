FROM node:20

WORKDIR /app

COPY package.json lerna.json yarn.lock ./
COPY packages/core/user-service/package.json ./packages/core/user-service/
COPY packages/shared/configs/package.json ./packages/shared/configs/
COPY packages/shared/nats-module/package.json ./packages/shared/nats-module/

RUN yarn install --frozen-lockfile

CMD ["yarn", "dev"]

EXPOSE 3003