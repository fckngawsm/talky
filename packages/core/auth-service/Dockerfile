FROM node:20-alpine AS base

RUN apk add --no-cache python3 make g++ gcc musl-dev

WORKDIR /app

COPY package.json yarn.lock lerna.json ./
COPY packages/core/auth-service/package.json ./packages/core/auth-service/
COPY packages/shared/configs/package.json ./packages/shared/configs/

RUN yarn install --frozen-lockfile 

FROM node:20-alpine

WORKDIR /app

COPY --from=base /app/node_modules ./node_modules
COPY --from=base /app/packages/core/auth-service/node_modules ./packages/core/auth-service/node_modules
COPY packages/core/auth-service ./packages/core/auth-service

WORKDIR /app/packages/core/auth-service

CMD ["npm", "run", "start:dev"]