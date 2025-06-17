FROM node:20-alpine AS base

RUN apk add --no-cache python3 make g++ gcc musl-dev

WORKDIR /app

# 1. Копируем корневые конфиги
COPY package.json yarn.lock lerna.json ./
COPY packages ./packages

# 2. Устанавливаем зависимости
RUN yarn install --frozen-lockfile

# 3. Финальный образ
FROM node:20-alpine

WORKDIR /app

# 4. Копируем только нужные зависимости сервиса
COPY --from=base /app/packages/core/user-service/node_modules ./packages/core/user-service/node_modules

# 5. Копируем ВЕСЬ код сервиса из ХОСТА (не из base-образа!)
COPY ./packages/core/user-service ./packages/core/user-service

WORKDIR /app/packages/core/user-service

EXPOSE 3002

CMD ["npm", "run", "start:dev"]