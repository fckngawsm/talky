import { Controller } from "@nestjs/common";
import { EventPattern, MessagePattern } from "@nestjs/microservices";
import {
  USER_PATTERNS,
  UserConfirmOtpCodeRequestContract,
  UserGetOtpCodeRequestContract,
} from "@talky/nats-module";
import { UsersOtpService } from "./users-otp.service";

@Controller()
export class UsersOtpController {
  constructor(private readonly usersOtpService: UsersOtpService) {}

  @EventPattern(USER_PATTERNS.COMMAND_GENERATE_USER_OTP_CODE)
  async handleGenerateOtpCode({ userId }: UserGetOtpCodeRequestContract) {
    console.log("Subscribed to generate otp");
    return this.usersOtpService.generateAndSaveOtpCode(userId);
  }

  @MessagePattern(USER_PATTERNS.COMMAND_CONFIRM_USER_OTP_CODE)
  async handleConfirmOtpCode({ userId, code }: UserConfirmOtpCodeRequestContract) {
    return this.usersOtpService.confirmOtpCode(userId, code);
  }
}
