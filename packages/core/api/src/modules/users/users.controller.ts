import { Controller, Get, Query, Req, UseGuards } from "@nestjs/common";
import { CookieAuthGuard } from "src/common/guards/cookie-auth.guard";
import { FindUserDto } from "./dto/findUser.dto";
import { UsersService } from "./users.service";

@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get("me")
  @UseGuards(CookieAuthGuard)
  getCurrentUser(@Req() req) {
    return req.user.user;
  }

  @Get("contact")
  findUser(@Query() query: FindUserDto) {
    return this.usersService.findUser(query);
  }
}
