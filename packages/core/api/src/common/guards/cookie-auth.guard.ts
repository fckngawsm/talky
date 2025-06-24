import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { AuthService } from "src/modules/auth/auth.service";

@Injectable()
export class CookieAuthGuard implements CanActivate {
  constructor(private readonly authService: AuthService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = request.cookies["auth_token"];
    if (!token) return false;
    const user = await this.authService.validateToken(token);
    if (!user) return false;

    request.user = user;
    return true;
  }
}
