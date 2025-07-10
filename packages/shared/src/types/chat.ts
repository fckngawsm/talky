import { DialogMemberRole } from "../../constants/dialogMemberRole";
import { User } from "./user";

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
  role: DialogMemberRole;
}
