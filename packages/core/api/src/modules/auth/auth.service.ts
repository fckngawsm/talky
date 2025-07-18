import { Inject, Injectable } from "@nestjs/common";
import { JwtService, JwtVerifyOptions } from "@nestjs/jwt";
import { ClientProxy } from "@nestjs/microservices";
import {
  AUTH_PATTERNS,
  AuthConfirmOtpRequestContract,
  AuthConfirmOtpResponseContract,
  AuthSignRequestContract,
  AuthSignResponseContract,
  USER_PATTERNS,
  UserGetByPhoneRequestContract,
  UserGetByPhoneResponseContract,
  UserGetOtpCodeRequestContract,
} from "@talky/nats-module";
import { lastValueFrom } from "rxjs";

@Injectable()
export class AuthService {
  constructor(
    @Inject("NATS_SERVICE") private readonly natsClient: ClientProxy,
    private readonly jwtService: JwtService,
  ) {}
  async validateToken(token: string) {
    try {
      const { user } = this.jwtService.verify(token, process.env.JWT_SECRET as JwtVerifyOptions);

      return user;
    } catch {
      return null;
    }
  }

  async signIn(phone: string) {
    const { status } = await lastValueFrom(
      this.natsClient.send<AuthSignResponseContract, AuthSignRequestContract>(
        AUTH_PATTERNS.COMMAND_AUTH_LOGIN,
        { phone },
      ),
    );

    if (status !== "ok") {
      throw new Error("Произошла ошибка при отправки кода");
    }
  }

  async signUp(phone: string) {
    const { status } = await lastValueFrom(
      this.natsClient.send<AuthSignResponseContract, AuthSignRequestContract>(
        AUTH_PATTERNS.COMMAND_AUTH_REGISTER,
        { phone },
      ),
    );

    if (status !== "ok") {
      throw new Error("Произошла ошибка при отправки кода");
    }
  }

  async refreshOtpCode(phone: string) {
    const { user } = await lastValueFrom(
      this.natsClient.send<UserGetByPhoneResponseContract, UserGetByPhoneRequestContract>(
        USER_PATTERNS.QUERY_GET_USER_BY_PHONE,
        { phone },
      ),
    );

    this.natsClient.emit<UserGetOtpCodeRequestContract>(
      USER_PATTERNS.COMMAND_GENERATE_USER_OTP_CODE,
      {
        userId: user?.id,
      },
    );
  }

  async confirmOtpAndGetToken(data: { code: string; phone: string }) {
    const { user } = await lastValueFrom(
      this.natsClient.send<UserGetByPhoneResponseContract, UserGetByPhoneRequestContract>(
        USER_PATTERNS.QUERY_GET_USER_BY_PHONE,
        { phone: data.phone },
      ),
    );

    const { isSuccess } = await lastValueFrom(
      this.natsClient.send<AuthConfirmOtpResponseContract, AuthConfirmOtpRequestContract>(
        USER_PATTERNS.COMMAND_CONFIRM_USER_OTP_CODE,
        { userId: user.id, code: data.code },
      ),
    );

    if (!isSuccess) throw new Error("Произошла ошибка при подтверждении кода");

    const token = this.jwtService.sign(
      { user },
      {
        expiresIn: "1d",
        secret: process.env.JWT_SECRET || "secret",
      },
    );

    return { token };
  }
}
