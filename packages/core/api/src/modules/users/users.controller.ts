import { Controller, Get, Query, Req, UseGuards } from "@nestjs/common";
import { CookieAuthGuard } from "src/common/guards/cookie-auth.guard";
import { AuthenticatedRequest } from "src/common/types/authenticated-request";
import { FindUserDto } from "./dto/findUser.dto";
import { UsersService } from "./users.service";
@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get("me")
  @UseGuards(CookieAuthGuard)
  getCurrentUser(@Req() req: AuthenticatedRequest) {
    return req.user;
  }

  @Get("contact")
  @UseGuards(CookieAuthGuard)
  findUser(@Query() query: FindUserDto, @Req() req: AuthenticatedRequest) {
    return this.usersService.findUser(query, req.user.id);
  }
}
