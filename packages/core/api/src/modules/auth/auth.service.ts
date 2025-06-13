import { Inject, Injectable } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { AUTH_PATTERNS } from "@talky/nats-module";

@Injectable()
export class AuthService {
  constructor(@Inject("NATS_SERVICE") private readonly natsClient: ClientProxy) {}
  async signIn(phone: string) {
    const user = await this.natsClient.send(AUTH_PATTERNS.COMMAND_AUTH_REGISTER, { phone });
  }
  async signUp(phone: string) {}
}
