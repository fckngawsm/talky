import { Inject, Injectable } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";

@Injectable()
export class AuthService {
  constructor(@Inject("NATS_SERVICE") private readonly natsClient: ClientProxy) {}
  async signIn(phone: string) {}
  async signUp(phone: string) {}
}
