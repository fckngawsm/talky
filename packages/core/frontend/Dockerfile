FROM node:20-alpine AS base

RUN apk add --no-cache python3 make g++ gcc musl-dev

WORKDIR /app

COPY package.json yarn.lock lerna.json ./
COPY packages ./packages

RUN yarn install --frozen-lockfile

FROM node:18-alpine

WORKDIR /app

COPY --from=base /app /app

WORKDIR /app/packages/core/frontend

EXPOSE 3000

CMD ["npm", "run", "dev"]
