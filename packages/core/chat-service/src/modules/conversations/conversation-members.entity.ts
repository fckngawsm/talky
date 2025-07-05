import { Column, Entity, PrimaryColumn } from "typeorm";
import { ConversationMemberRole } from "./conversations.constants";

@Entity("conversation_members")
export class ConversationMembers {
  @PrimaryColumn()
  user_id: number;

  @PrimaryColumn()
  conversation_id: number;

  @Column()
  joined_at: Date;

  @Column({
    type: "enum",
    enum: ConversationMemberRole,
    default: ConversationMemberRole.member,
  })
  role: ConversationMemberRole;
}
