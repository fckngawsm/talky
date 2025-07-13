import { api } from "@/shared/libs/axios";
import type { DialogWithInfo, DialogWithMessages, User } from "@talky/types";

export interface CreateDialogData {
  isGroup: boolean;
  name: string;
  avatarUrl: string;
  memberIds: Array<User["id"]>;
}

export const getDialogs = (): Promise<DialogWithInfo[]> => api.get("/chats");

export const createDialog = (data: CreateDialogData) => api.post("/chats", data);

export const getDialogById = (dialogId: number): Promise<DialogWithMessages> =>
  api.get(`/chats/${dialogId}`);
