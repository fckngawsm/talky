import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { UsersOtp } from "./users-otp.entity";

@Injectable()
export class UsersOtpService {
  constructor(
    @InjectRepository(UsersOtp)
    private readonly userOtpRepository: Repository<UsersOtp>,
  ) {}

  async generateAndSaveOtpCode(userId: number) {
    const generatedCode = (1000 + Math.random() * 9000).toString();

    return this.userOtpRepository.create({
      userId,
      code: generatedCode,
    });
  }
}
