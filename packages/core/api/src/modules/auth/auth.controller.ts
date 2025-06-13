import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { SignDTO } from "./dto/sign.dto";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("register")
  async signUp(@Body() { phone }: SignDTO) {
    return await this.authService.signUp(phone);
  }

  @Post("register")
  async signIn(@Body() { phone }: SignDTO) {
    return await this.authService.signIn(phone);
  }
}
