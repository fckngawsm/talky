import { Inject, Injectable } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import {
  USER_PATTERNS,
  UserFindByDataRequestContract,
  UserFindByDataResponseContract,
} from "@talky/nats-module";
import { lastValueFrom } from "rxjs";

@Injectable()
export class UsersService {
  constructor(@Inject("NATS_SERVICE") private readonly natsClient: ClientProxy) {}
  async findUser(data: UserFindByDataRequestContract) {
    const { user } = await lastValueFrom(
      this.natsClient.send<UserFindByDataResponseContract, UserFindByDataRequestContract>(
        USER_PATTERNS.QUERY_GET_USER_BY_DATA,
        { phone: data?.phone, login: data?.login },
      ),
    );

    return user;
  }
}
