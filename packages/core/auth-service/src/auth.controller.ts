import { Controller, Inject } from "@nestjs/common";
import { ClientProxy, MessagePattern, Payload, RpcException } from "@nestjs/microservices";
import {
  AUTH_PATTERNS,
  AuthSignResponseContract,
  USER_PATTERNS,
  UserCreateRequestContract,
  UserCreateResponseContract,
  UserGetByPhoneRequestContract,
  UserGetByPhoneResponseContract,
  UserGetOtpCodeRequestContract,
} from "@talky/nats-module";
import { lastValueFrom } from "rxjs";

@Controller()
export class AuthController {
  constructor(@Inject("NATS_SERVICE") private readonly natsClient: ClientProxy) {}

  @MessagePattern(AUTH_PATTERNS.COMMAND_AUTH_REGISTER)
  async handleRegister(@Payload() data: { phone: string }): Promise<AuthSignResponseContract> {
    const { phone } = data;

    const { user } = await lastValueFrom(
      this.natsClient.send<UserGetByPhoneResponseContract, UserGetByPhoneRequestContract>(
        USER_PATTERNS.QUERY_GET_USER_BY_PHONE,
        { phone },
      ),
    );

    if (user?.id) {
      throw new RpcException("Пользователь с указанным телефоном уже существует!");
    }

    const { user: newUser } = await lastValueFrom(
      this.natsClient.send<UserCreateResponseContract, UserCreateRequestContract>(
        USER_PATTERNS.COMMAND_CREATE_USER,
        { phone },
      ),
    );

    this.natsClient.emit<UserGetOtpCodeRequestContract>(
      USER_PATTERNS.COMMAND_GENERATE_USER_OTP_CODE,
      {
        userId: newUser?.id,
      },
    );

    return { status: "ok", message: "Пользователь успешно зарегистрирован, OTP отправлен" };
  }

  @MessagePattern(AUTH_PATTERNS.COMMAND_AUTH_LOGIN)
  async handleLogin(@Payload() data: { phone: string }): Promise<AuthSignResponseContract> {
    const { phone } = data;

    const { user: newUser } = await lastValueFrom(
      this.natsClient.send<UserCreateResponseContract, UserCreateRequestContract>(
        USER_PATTERNS.QUERY_GET_USER_BY_PHONE,
        { phone },
      ),
    );

    this.natsClient.emit<UserGetOtpCodeRequestContract>(
      USER_PATTERNS.COMMAND_GENERATE_USER_OTP_CODE,
      {
        userId: newUser?.id,
      },
    );

    return { status: "ok", message: "OTP отправлен" };
  }
}
