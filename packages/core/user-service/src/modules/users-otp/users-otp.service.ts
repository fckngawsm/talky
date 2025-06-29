import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { MoreThan, Repository } from "typeorm";
import { UsersOtp } from "./users-otp.entity";

@Injectable()
export class UsersOtpService {
  constructor(
    @InjectRepository(UsersOtp)
    private readonly userOtpRepository: Repository<UsersOtp>,
  ) {}

  async generateAndSaveOtpCode(userId: number) {
    const code = Math.floor(1000 + Math.random() * 9000).toString();
    const otp = this.userOtpRepository.create({
      userId,
      code,
      expiresAt: new Date(Date.now() + 60 * 1000),
    });
    await this.userOtpRepository.save(otp);
    return { message: "otp generated" };
  }

  async confirmOtpCode(userId: number, code: string) {
    if (process.env.NODE_ENV === "development" && code === "4444") {
      return { isSuccess: true };
    }

    const otp = await this.userOtpRepository.findOne({
      where: { userId, code, expiresAt: MoreThan(new Date()) },
    });

    return { isSuccess: Boolean(otp) };
  }
}
