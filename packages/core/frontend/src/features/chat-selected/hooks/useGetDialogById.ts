import { getDialogById } from "@/entities/chat/chat.api";
import { useChat } from "@/providers/store/chat.store";
import { useChatId } from "@/providers/store/chatId.store";
import { dialogQueryKeys } from "@/shared/query-keys/dialog";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

export const useGetDialogById = () => {
  const { onSetChat } = useChat();
  const { selectedChatId } = useChatId();

  const query = useQuery({
    queryKey: dialogQueryKeys.dialogById(selectedChatId),
    queryFn: () => getDialogById(selectedChatId),
    enabled: Boolean(selectedChatId),
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    if (query.data) {
      onSetChat(query.data);
    }
  }, [query.data, onSetChat]);

  return query;
};
