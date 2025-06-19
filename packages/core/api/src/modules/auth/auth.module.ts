import { Module } from "@nestjs/common";
import { NatsTransportModule } from "@talky/nats-module";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";

@Module({
  imports: [NatsTransportModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
