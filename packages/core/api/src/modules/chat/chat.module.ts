import { Module } from "@nestjs/common";
import { NatsTransportModule } from "@talky/nats-module";
import { AuthModule } from "../auth/auth.module";
import { ChatController } from "./chat.controller";
import { ChatService } from "./chat.service";

@Module({
  imports: [AuthModule, NatsTransportModule],
  controllers: [ChatController],
  providers: [ChatService],
})
export class ChatModule {}
