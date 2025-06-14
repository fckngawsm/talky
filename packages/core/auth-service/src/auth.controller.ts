import { Controller, Inject } from "@nestjs/common";
import { ClientProxy, MessagePattern, Payload } from "@nestjs/microservices";
import {
  AUTH_PATTERNS,
  USER_PATTERNS,
  UserGetByPhoneRequestContract,
  UserGetByPhoneResponseContract,
} from "@talky/nats-module";
import { lastValueFrom } from "rxjs";

@Controller()
export class AuthController {
  constructor(@Inject("NATS_SERVICE") private readonly natsClient: ClientProxy) {}

  @MessagePattern(AUTH_PATTERNS.COMMAND_AUTH_REGISTER)
  async handleRegister(@Payload() data: { phone: string }): Promise<string> {
    const { phone } = data;

    const response = await lastValueFrom(
      this.natsClient.send<UserGetByPhoneResponseContract, UserGetByPhoneRequestContract>(
        USER_PATTERNS.QUERY_GET_USER_BY_PHONE,
        { phone },
      ),
    );

    if (response?.isExist) {
      throw new Error("Пользователь с указанным телефоном уже существует!");
    }

    return "1234";
  }
}
