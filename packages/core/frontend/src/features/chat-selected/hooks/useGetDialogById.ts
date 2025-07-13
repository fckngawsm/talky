import { getDialogById } from "@/entities/chat/chat.api";
import { dialogQueryKeys } from "@/shared/query-keys/dialog";
import { useQuery } from "@tanstack/react-query";

export const useGetDialogById = (dialogId: number) => {
  return useQuery({
    queryKey: dialogQueryKeys.dialogById(dialogId),
    queryFn: () => getDialogById(dialogId),
    enabled: Boolean(dialogId),
  });
};
