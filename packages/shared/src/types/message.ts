import { MessageTypes } from "../constants/messageType";

export interface Message {
  id: number;
  sender_id: number;
  content: string;
  dialog_id: number;
  message_type: MessageTypes;
  deletedAt: Date;
  createdAt: Date;
  updatedAt: Date;
}
