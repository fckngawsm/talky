import { Module } from "@nestjs/common";
import { NatsTransportModule } from "@talky/nats-module";
import { AuthController } from "./auth.controller";

@Module({
  controllers: [AuthController],
  imports: [NatsTransportModule],
})
export class AppModule {}
