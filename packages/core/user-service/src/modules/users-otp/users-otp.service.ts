import { Injectable } from "@nestjs/common";
import { MessagePattern } from "@nestjs/microservices";
import { InjectRepository } from "@nestjs/typeorm";
import {
  USER_PATTERNS,
  UserGetOtpCodeRequestContract,
  UserGetOtpCodeResponseContract,
} from "@talky/nats-module";
import { Repository } from "typeorm";
import { UsersOtp } from "./users-otp.entity";

@Injectable()
export class UsersOtpService {
  constructor(
    @InjectRepository(UsersOtp)
    private readonly userOtpRepository: Repository<UsersOtp>,
  ) {}

  @MessagePattern(USER_PATTERNS.QUERY_GET_USER_OTP_CODE)
  generateAndSaveOtpCode({
    userId,
  }: UserGetOtpCodeRequestContract): UserGetOtpCodeResponseContract {
    const code = (1000 + Math.random() * 9000).toString();

    this.userOtpRepository.create({
      userId,
      code,
    });

    return {
      code,
    };
  }
}
