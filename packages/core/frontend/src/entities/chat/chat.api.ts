import { api } from "@/shared/libs/axios";
import type { DialogWithInfo, User } from "@talky/types";

export interface CreateDialogData {
  isGroup: boolean;
  name: string;
  memberIds: Array<User["id"]>;
}

export const getDialogs = (): Promise<DialogWithInfo[]> => api.get("/chats");

export const createDialog = (data: CreateDialogData) => api.post("/chats", data);
