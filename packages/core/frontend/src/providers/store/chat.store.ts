import type { DialogWithMessages } from "@talky/types";
import { create } from "zustand";

interface ChatStore {
  selectedChat: DialogWithMessages;
  onSetChat: (chatId: DialogWithMessages) => void;
}

export const useChat = create<ChatStore>((set) => ({
  selectedChat: null,
  onSetChat: (chat) => set({ selectedChat: chat }),
}));
