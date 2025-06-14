import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { NatsTransportModule } from "@talky/nats-module";
import { AuthController } from "./auth.controller";
@Module({
  imports: [
    JwtModule.register({
      secret: "ACCESS_SECRET_KEY",
      signOptions: { expiresIn: "15m" },
    }),
    JwtModule.register({
      secret: "REFRESH_SECRET_KEY",
      signOptions: { expiresIn: "7d" },
    }),
    NatsTransportModule,
  ],
  controllers: [AuthController],
})
export class AppModule {}
