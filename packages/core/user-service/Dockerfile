FROM node:20-alpine AS base

RUN apk add --no-cache python3 make g++ gcc musl-dev

WORKDIR /app

COPY package.json yarn.lock lerna.json ./
COPY packages ./packages
COPY prisma ./prisma/

# Устанавливаем зависимости с явным указанием платформы
RUN PRISMA_CLI_BINARY_TARGETS=linux-musl-arm64-openssl-3.0.x yarn install --frozen-lockfile

FROM node:20-alpine

WORKDIR /app

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/packages/core/user-service/node_modules ./packages/core/user-service/node_modules
COPY --from=builder /app/generated ./generated
COPY packages/core/user-service ./packages/core/user-service

RUN cd packages/core/user-service && \
    npx prisma generate --schema=./prisma/schema.prisma

WORKDIR /app/packages/core/user-service

EXPOSE 3002

CMD ["npm", "run", "start:dev"]