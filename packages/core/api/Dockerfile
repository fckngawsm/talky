FROM node:20-alpine AS base

RUN apk add --no-cache python3 make g++ gcc musl-dev

WORKDIR /app

COPY package.json yarn.lock lerna.json ./
COPY packages ./packages

RUN yarn install --frozen-lockfile 

FROM node:20-alpine

WORKDIR /app

COPY --from=base /app/node_modules ./node_modules
COPY --from=base /app/packages/core/api/node_modules ./packages/core/api/node_modules
COPY packages/core/api ./packages/core/api

WORKDIR /app/packages/core/api

EXPOSE 3001

CMD ["npm", "run", "start:dev"]