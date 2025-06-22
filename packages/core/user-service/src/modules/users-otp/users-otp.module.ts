import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "../users/users.entity";
import { UsersOtpController } from "./users-otp.controller";
import { UsersOtp } from "./users-otp.entity";
import { UsersOtpService } from "./users-otp.service";

@Module({
  imports: [TypeOrmModule.forFeature([User, UsersOtp])],
  providers: [UsersOtpService],
  controllers: [UsersOtpController],
})
export class UsersOtpModule {}
