import { Inject, Injectable } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { AUTH_PATTERNS, AuthSignContract, AuthSignResponseContract } from "@talky/nats-module";
import { lastValueFrom } from "rxjs";

@Injectable()
export class AuthService {
  constructor(@Inject("NATS_SERVICE") private readonly natsClient: ClientProxy) {}
  async signIn(phone: string) {}
  async signUp(phone: string) {
    return await lastValueFrom(
      this.natsClient.send<AuthSignResponseContract, AuthSignContract>(
        AUTH_PATTERNS.COMMAND_AUTH_REGISTER,
        { phone },
      ),
    );
  }
}
