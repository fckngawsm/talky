import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { ConfirmOtpDTO, SignDTO } from "./dto/sign.dto";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("sign-up")
  async signUp(@Body() { phone }: SignDTO) {
    return await this.authService.signUp(phone);
  }

  @Post("sign-in")
  async signIn(@Body() { phone }: SignDTO) {
    return await this.authService.signIn(phone);
  }

  @Post("confirm-otp")
  async ConfirmItp(@Body() { userId, code }: ConfirmOtpDTO) {
    return await this.authService.confirmOtp({ userId, code });
  }
}
