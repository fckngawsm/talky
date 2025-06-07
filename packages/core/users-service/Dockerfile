FROM node:20-alpine AS base

RUN apk add --no-cache python3 make g++ gcc musl-dev

WORKDIR /app

COPY package.json yarn.lock lerna.json ./
COPY packages/core/users-service/package.json ./packages/core/users-service/
COPY packages/shared/configs/package.json ./packages/shared/configs/

RUN yarn install --frozen-lockfile 

FROM node:20-alpine

WORKDIR /app

COPY --from=base /app/node_modules ./node_modules
COPY --from=base /app/packages/core/users-service/node_modules ./packages/core/users-service/node_modules
COPY packages/core/users-service ./packages/core/users-service

WORKDIR /app/packages/core/users-service

EXPOSE 3002

CMD ["npm", "run", "start:dev"]