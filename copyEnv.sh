#!/bin/sh

cp .env.sample .env

cp packages/core/api/.env.sample packages/core/api/.development.env
cp packages/core/auth-service/.env.sample packages/core/auth-service/.development.env
cp packages/core/chat-service/.env.sample packages/core/chat-service/.development.env
cp packages/core/user-service/.env.sample packages/core/user-service/.development.env
cp packages/core/frontend/.env.sample packages/core/frontend/.development.env
