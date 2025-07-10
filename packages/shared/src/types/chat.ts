import { DialogMemberRole } from "../constants";
import { User } from "./user";

export interface Dialog {
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
