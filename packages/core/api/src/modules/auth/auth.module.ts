import { Module } from "@nestjs/common";
import { NatsTransportModule } from "@talky/nats-module";
import { AuthService } from "./auth.service";

@Module({
  imports: [NatsTransportModule],
  providers: [AuthService],
})
export class AuthModule {}
