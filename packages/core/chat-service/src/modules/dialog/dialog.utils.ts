import { Dialog } from "@talky/types";
import { ResultDialogs } from "./types/dialogs";

export const mappingDialogs = (dialogs: ResultDialogs[]): Dialog[] => {
  return dialogs.map((dialog) => ({
    id: dialog.dialog_id,
    avatarUrl: dialog.dialog_avatarUrl,
    is_group: dialog.dialog_is_group,
    updatedAt: dialog.dialog_updatedAt,
    createdAt: dialog.dialog_createdAt,
    lastMessageContent: dialog.lastMessageContent,
    name: dialog.dialog_name,
  }));
};
