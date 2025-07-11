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
      avatar: "",
      login: `${Date.now()}-login`,
      lastName: `${Date.now()}-lastName`,
      firstName: `${Date.now()}-firstName`,
    });

    await this.userRepository.save(user);
    return user;
  }

  async findUsers({ searchValue }: UserFindByDataRequestContract): Promise<User[] | null> {
    const foundedUser = await this.userRepository
      .createQueryBuilder("user")
      .where("user.login LIKE :search", { search: `%${searchValue}%` })
      .orWhere("user.phone LIKE :search", { search: searchValue })
      .getMany();

    if (!foundedUser) return null;

    return foundedUser;
  }
}
