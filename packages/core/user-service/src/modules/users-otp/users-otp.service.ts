import { Injectable } from "@nestjs/common";
import { MessagePattern } from "@nestjs/microservices";
import { InjectRepository } from "@nestjs/typeorm";
import {
  USER_PATTERNS,
  UserConfirmOtpCodeRequestContract,
  UserConfirmOtpCodeResponseContract,
  UserGetOtpCodeRequestContract,
} from "@talky/nats-module";
import { Repository } from "typeorm";
import { UsersOtp } from "./users-otp.entity";

@Injectable()
export class UsersOtpService {
  constructor(
    @InjectRepository(UsersOtp)
    private readonly userOtpRepository: Repository<UsersOtp>,
  ) {}

  @MessagePattern(USER_PATTERNS.COMMAND_GENERATE_USER_OTP_CODE)
  generateAndSaveOtpCode({ userId }: UserGetOtpCodeRequestContract): { message: string } {
    const code = (1000 + Math.random() * 9000).toString();
    this.userOtpRepository.create({
      userId,
      code,
    });

    return {
      message: "otp generated",
    };
  }

  @MessagePattern(USER_PATTERNS.COMMAND_CONFIRM_USER_OTP_CODE)
  confirmOtpCode({
    userId,
    code,
  }: UserConfirmOtpCodeRequestContract): UserConfirmOtpCodeResponseContract {
    const foundedCodeData = this.userOtpRepository.findOne({
      where: {
        user: {
          id: userId,
        },
        code,
      },
    });

    return {
      isSuccess: Boolean(foundedCodeData),
    };
  }
}
