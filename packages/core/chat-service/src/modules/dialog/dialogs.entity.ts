import {
  Column,
  CreateDateColumn,
  Entity,
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
}
