import type { ConversationMemberRole } from "@/shared/contants/member";
import type { User } from "@/shared/types/User";

interface Dialog {
  id: number;
  is_group: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}
export interface Conversation {
  user: User;
  dialog: Dialog;
  joined_at: Date;
  role: ConversationMemberRole;
}
