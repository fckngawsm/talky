import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Dialog } from "../dialog/entities/dialogs.entity";
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

  @DeleteDateColumn()
  deleted_at: Date;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => Dialog, (dialog) => dialog.messages, { onDelete: "CASCADE" })
  @JoinColumn({ name: "dialog_id" })
  dialog: Dialog;
}
