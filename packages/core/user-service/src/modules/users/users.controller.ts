import { Controller } from "@nestjs/common";
import { MessagePattern, Payload } from "@nestjs/microservices";
import {
  USER_PATTERNS,
  UserCreateRequestContract,
  UserCreateResponseContract,
  UserFindByDataRequestContract,
  UserFindByDataResponseContract,
  UserGetByPhoneRequestContract,
  UserGetByPhoneResponseContract,
} from "@talky/nats-module";
import { UsersService } from "./users.service";

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @MessagePattern(USER_PATTERNS.QUERY_GET_USER_BY_PHONE)
  async handleGetUserByPhone(
    @Payload() data: UserGetByPhoneRequestContract,
  ): Promise<UserGetByPhoneResponseContract> {
    const { phone } = data;

    const user = await this.usersService.findByPhone(phone);

    return { user };
  }

  @MessagePattern(USER_PATTERNS.COMMAND_CREATE_USER)
  async createUser(
    @Payload() data: UserCreateRequestContract,
  ): Promise<UserCreateResponseContract> {
    const { phone } = data;

    const user = await this.usersService.createUser(phone);

    return { user };
  }

  @MessagePattern(USER_PATTERNS.QUERY_GET_USER_BY_DATA)
  async findByData(
    @Payload() data: UserFindByDataRequestContract,
  ): Promise<UserFindByDataResponseContract> {
    const { login, phone } = data;

    const user = await this.usersService.findUser({ login, phone });

    return { user };
  }
}
