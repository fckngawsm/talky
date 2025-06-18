import { Module } from "@nestjs/common";
import { NatsTransportModule } from "@talky/nats-module";
import { DatabaseModule } from "./database/database.module";
import { UsersModule } from "./modules/users/users.module";

@Module({
  imports: [DatabaseModule, UsersModule, NatsTransportModule],
})
export class AppModule {}
