import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { NatsTransportModule } from "@talky/nats-module";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";

@Module({
  imports: [
    NatsTransportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET || "secret",
      signOptions: { expiresIn: "1d" },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
