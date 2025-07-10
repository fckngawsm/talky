import { Column, Entity, PrimaryColumn } from "typeorm";
import { DialogMemberRole } from "./dialog.constants";

@Entity("dialog_members")
export class DialogMembers {
  @PrimaryColumn()
  user_id: number;

  @PrimaryColumn()
  dialog_id: number;

  @Column()
  joined_at: Date;

  @Column({
    type: "enum",
    enum: DialogMemberRole,
    default: DialogMemberRole.member,
  })
  role: DialogMemberRole;
}
