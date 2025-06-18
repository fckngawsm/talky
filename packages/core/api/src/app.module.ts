import { Module } from "@nestjs/common";
import { NatsTransportModule } from "@talky/nats-module";
import { AuthModule } from "./modules/auth/auth.module";
@Module({
  imports: [NatsTransportModule, AuthModule],
  controllers: [],
})
export class AppModule {}
