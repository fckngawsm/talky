FROM node:20-alpine

WORKDIR /app

COPY package.json lerna.json yarn.lock tsconfig.base.json tsconfig.json ./

COPY packages/shared/package.json ./packages/shared/
COPY packages/core/auth-service/package.json ./packages/core/auth-service/

RUN cd packages/core/auth-service && yarn install --frozen-lockfile

COPY packages/shared/ ./packages/shared/
COPY packages/core/auth-service/ ./packages/core/auth-service/

RUN cd packages/shared/ && yarn install

CMD ["yarn", "dev"]
