import { Body, Controller, Post, Res } from "@nestjs/common";
import { Response } from "express";
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
  async confirmOtp(@Body() body: ConfirmOtpDTO, @Res({ passthrough: true }) res: Response) {
    const { code, phone } = body;

    const { token } = await this.authService.confirmOtpAndGetToken({ code, phone });

    res.cookie("auth_token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      maxAge: 86400000,
      path: "/",
    });

    return { success: true };
  }

  @Post("refresh-confirm-otp")
  async refreshOtp(@Body() body: ConfirmOtpDTO, @Res({ passthrough: true }) res: Response) {
    const { code, phone } = body;

    return { success: true };
  }
}
