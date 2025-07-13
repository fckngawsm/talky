import { DialogMemberRole } from "../constants";
import { Message } from "./message";
import { User } from "./user";

export interface Dialog {
  id: number;
  is_group: boolean;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface DialogWithMessages extends Dialog {
  messages: Message[];
}

export interface DialogWithInfo {
  id: number;
  avatarUrl: string;
  is_group: boolean;
  updatedAt: string;
  createdAt: string;
  lastMessageContent: string;
  name: string;
}
export interface Conversation {
  user: User;
  dialog: Dialog;
  joined_at: Date;
  role: DialogMemberRole;
}
