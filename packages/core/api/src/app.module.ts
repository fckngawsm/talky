import { Module } from "@nestjs/common";
import { NatsTransportModule } from "@talky/nats-module";
import { AuthModule } from "./modules/auth/auth.module";

@Module({
  imports: [AuthModule, NatsTransportModule],
  controllers: [],
})
export class AppModule {}
