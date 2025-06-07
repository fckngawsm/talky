import { Module } from "@nestjs/common";
import { ClientsModule, Transport } from "@nestjs/microservices";
import { AuthService } from "./auth.service";

@Module({
  imports: [
    ClientsModule.register([
      {
        name: "AUTH_SERVICE",
        transport: Transport.NATS,
        options: {
          servers: ["nats://nats:4222"],
        },
      },
    ]),
  ],
  providers: [AuthService],
})
export class AuthModule {}
