import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserFindByDataRequestContract } from "@talky/nats-module";
import { Repository } from "typeorm";
import { User } from "./users.entity";

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async findByPhone(phone: string): Promise<User | null> {
    return this.userRepository.findOne({ where: { phone } });
  }

  async createUser(phone: string): Promise<User | null> {
    const user = this.userRepository.create({
      phone,
      login: `${Date.now()}-login`,
      lastName: `${Date.now()}-lastName`,
      firstName: `${Date.now()}-firstName`,
    });

    await this.userRepository.save(user);
    return user;
  }

  async findUser({ login, phone }: UserFindByDataRequestContract): Promise<User | null> {
    const foundedUser = await this.userRepository.findOne({
      where: {
        login,
        phone,
      },
    });

    if (!foundedUser) return null;

    return foundedUser;
  }
}
