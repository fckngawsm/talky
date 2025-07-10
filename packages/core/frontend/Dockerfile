FROM node:20-alpine

WORKDIR /app

COPY package.json lerna.json yarn.lock tsconfig.base.json tsconfig.json ./

COPY packages/core/frontend/package.json ./packages/core/frontend/

COPY packages/shared/ ./packages/shared/
COPY packages/core/frontend/ ./packages/core/frontend/

RUN yarn install

CMD ["yarn", "dev"]