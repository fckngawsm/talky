import { Controller, Get, Query, Req, UseGuards } from "@nestjs/common";
import { CookieAuthGuard } from "src/common/guards/cookie-auth.guard";
import { FindUserDto } from "./dto/findUser.dto";
import { UsersService } from "./users.service";
@UseGuards(CookieAuthGuard)
@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get("me")
  getCurrentUser(@Req() req) {
    return req.user;
  }

  @Get("contact")
  findUser(@Query() query: FindUserDto, @Req() req) {
    console.log(req.user, "req");
    return this.usersService.findUser(query, req.user.id);
  }
}
