FROM node:20

WORKDIR /app

COPY package.json lerna.json yarn.lock ./
COPY packages/core/api/package.json ./packages/core/api/
COPY packages/shared/configs/package.json ./packages/shared/configs/
COPY packages/shared/nats-module/package.json ./packages/shared/nats-module/

RUN yarn install --frozen-lockfile

CMD ["yarn", "dev"]

EXPOSE 3001