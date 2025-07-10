FROM node:20-alpine

WORKDIR /app

COPY package.json lerna.json yarn.lock tsconfig.base.json tsconfig.json ./

COPY packages/shared/package.json ./packages/shared/
COPY packages/core/user-service/package.json ./packages/core/user-service/

RUN cd packages/core/user-service && yarn install --frozen-lockfile

COPY packages/shared/ ./packages/shared/
COPY packages/core/user-service/ ./packages/core/user-service/

RUN cd packages/shared/ && yarn install

CMD ["yarn", "dev"]

