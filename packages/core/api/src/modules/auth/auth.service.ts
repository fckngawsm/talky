import { Inject, Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { ClientProxy } from "@nestjs/microservices";
import {
  AUTH_PATTERNS,
  AuthConfirmOtpRequestContract,
  AuthConfirmOtpResponseContract,
  AuthSignRequestContract,
  AuthSignResponseContract,
  USER_PATTERNS,
} from "@talky/nats-module";
import { lastValueFrom } from "rxjs";

@Injectable()
export class AuthService {
  constructor(
    @Inject("NATS_SERVICE") private readonly natsClient: ClientProxy,
    private readonly jwtService: JwtService,
  ) {}
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

  async confirmOtp(data: { code: string; userId: number }) {
    const { isSuccess } = await lastValueFrom(
      this.natsClient.send<AuthConfirmOtpResponseContract, AuthConfirmOtpRequestContract>(
        USER_PATTERNS.COMMAND_CONFIRM_USER_OTP_CODE,
        { userId: data.userId, code: data.code },
      ),
    );

    if (!isSuccess) throw new Error("Произошла ошибка при подтверждении кода");

    const token = this.jwtService.sign(
      { sub: data.userId },
      {
        expiresIn: "1d",
        secret: process.env.JWT_SECRET || "secret",
      },
    );

    return { token };
  }
}
