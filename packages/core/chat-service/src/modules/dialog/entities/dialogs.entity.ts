import { Messages } from "src/modules/messages/messages.entity";
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("dialogs")
export class Dialog {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  avatarUrl: string;

  @Column()
  is_group: boolean;

  @Column()
  name: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => Messages, (message) => message.dialog)
  messages: Messages[];
}
