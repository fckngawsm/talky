import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { MessageTypes } from "./messages.constants";

@Entity("messages")
export class Messages {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  sender_id: number;

  @Column()
  content: string;

  @Column({ type: "enum", enum: MessageTypes, default: MessageTypes.text })
  message_type: MessageTypes;

  @Column()
  edited_at: Date;

  @Column()
  deleted_at: Date;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
