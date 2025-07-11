import { Module } from "@nestjs/common";
import { NatsTransportModule } from "@talky/nats-module";
import { AuthModule } from "../auth/auth.module";
import { ChatController } from "./chat.controller";

@Module({
  imports: [AuthModule, NatsTransportModule],
  controllers: [ChatController],
})
export class ChatModule {}
