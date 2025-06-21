import { Injectable } from "@nestjs/common";
import { MessagePattern } from "@nestjs/microservices";
import { InjectRepository } from "@nestjs/typeorm";
import { USER_PATTERNS, UserGetOtpCodeRequestContract } from "@talky/nats-module";
import { Repository } from "typeorm";
import { UsersOtp } from "./users-otp.entity";

@Injectable()
export class UsersOtpService {
  constructor(
    @InjectRepository(UsersOtp)
    private readonly userOtpRepository: Repository<UsersOtp>,
  ) {}

  @MessagePattern(USER_PATTERNS.COMMAND_GENERATE_USER_OTP_CODE)
  generateAndSaveOtpCode({ userId }: UserGetOtpCodeRequestContract): void {
    const code = (1000 + Math.random() * 9000).toString();

    this.userOtpRepository.create({
      userId,
      code,
    });
  }
}
