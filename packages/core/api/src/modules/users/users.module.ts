import { Module } from "@nestjs/common";
import { NatsTransportModule } from "@talky/nats-module";
import { AuthModule } from "../auth/auth.module";
import { UsersController } from "./users.controller";
import { UsersService } from "./users.service";

@Module({
  imports: [AuthModule, NatsTransportModule],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
