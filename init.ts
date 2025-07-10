const fs = require("fs");

fs.copyFileSync(".env.sample", ".env");

fs.copyFileSync("packages/core/api/.env.sample", "packages/core/api/.development.env");
fs.copyFileSync(
  "packages/core/auth-service/.env.sample",
  "packages/core/auth-service/.development.env",
);
fs.copyFileSync(
  "packages/core/chat-service/.env.sample",
  "packages/core/chat-service/.development.env",
);
fs.copyFileSync(
  "packages/core/user-service/.env.sample",
  "packages/core/user-service/.development.env",
);
fs.copyFileSync("packages/core/frontend/.env.sample", "packages/core/frontend/.development.env");
