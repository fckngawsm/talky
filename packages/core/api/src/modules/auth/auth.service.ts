import { Inject, Injectable } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import {
  AUTH_PATTERNS,
  AuthSignRequestContract,
  AuthSignResponseContract,
  USER_PATTERNS,
  UserConfirmOtpCodeRequestContract,
  UserConfirmOtpCodeResponseContract,
} from "@talky/nats-module";
import { lastValueFrom } from "rxjs";

@Injectable()
export class AuthService {
  constructor(@Inject("NATS_SERVICE") private readonly natsClient: ClientProxy) {}
  async signIn(phone: string) {}
  async signUp(phone: string) {
    const { status } = await lastValueFrom(
      this.natsClient.send<AuthSignResponseContract, AuthSignRequestContract>(
        AUTH_PATTERNS.COMMAND_AUTH_REGISTER,
        { phone },
      ),
    );

    console.log(status, "status");

    if (status !== "ok") {
      throw new Error("Произошла ошибка при отправки кода");
    }
  }

  async confirmOtp(data: { code: string; userId: number }) {
    const code = await lastValueFrom(
      this.natsClient.send<UserConfirmOtpCodeResponseContract, UserConfirmOtpCodeRequestContract>(
        USER_PATTERNS.COMMAND_CONFIRM_USER_OTP_CODE,
        { userId: data.userId, code: data.code },
      ),
    );
  }
}
