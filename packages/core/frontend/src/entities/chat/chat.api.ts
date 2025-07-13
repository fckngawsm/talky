import { api } from "@/shared/libs/axios";
import type { Dialog, User } from "@talky/types";

export interface CreateDialogData {
  isGroup: boolean;
  name: string;
  memberIds: Array<User["id"]>;
}

export const getDialogs = (): Promise<Dialog[]> => api.get("/chats");

export const createDialog = (data: CreateDialogData) => api.post("/chats", data);
