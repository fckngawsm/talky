FROM node:20-alpine

WORKDIR /app

COPY package.json lerna.json yarn.lock tsconfig.base.json tsconfig.json ./
COPY packages/core/frontend/package.json ./packages/core/frontend/

RUN yarn install --frozen-lockfile

CMD ["yarn", "dev"]