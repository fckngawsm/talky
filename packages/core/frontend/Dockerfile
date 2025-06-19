FROM node:20-alpine

WORKDIR /app

COPY package.json lerna.json yarn.lock ./
COPY packages/core/frontend/package.json ./packages/core/frontend/
COPY packages/shared/configs/package.json ./packages/shared/configs/

RUN yarn install --frozen-lockfile

CMD ["yarn", "dev"]

EXPOSE 3000