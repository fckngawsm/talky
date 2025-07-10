FROM node:20-alpine

WORKDIR /app

COPY package.json lerna.json yarn.lock tsconfig.base.json tsconfig.json ./

COPY packages/shared/package.json ./packages/shared/
COPY packages/core/api/package.json ./packages/core/api/

RUN cd packages/core/api && yarn install --frozen-lockfile

COPY packages/shared/ ./packages/shared/
COPY packages/core/api/ ./packages/core/api/

RUN cd packages/shared/ && yarn install

CMD ["yarn", "dev"]
