import { Controller, Get, Req, UseGuards } from "@nestjs/common";
import { CookieAuthGuard } from "src/common/guards/cookie-auth.guard";
import { UsersService } from "./users.service";

@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get("me")
  @UseGuards(CookieAuthGuard)
  getCurrentUser(@Req() req) {
    console.log(req, "req");
    return req.user.user;
  }
}
