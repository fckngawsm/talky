import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from "typeorm";
import { User } from "../users/users.entity";

@Entity("users_otp")
export class UsersOtp {
  @PrimaryColumn()
  userId: number;

  @OneToOne(() => User, (user) => user.otp)
  @JoinColumn({ name: "userId" })
  user: User;

  @Column()
  code: string;

  @Column()
  expiresAt: Date;
}
