import type { Dialog } from "@talky/types";
import { create } from "zustand";

interface ChatStore {
  selectedChatId: Dialog["id"] | null;
  onSelectChatId: (chatId: Dialog["id"]) => void;
}

export const useChatId = create<ChatStore>((set) => ({
  selectedChatId: null,
  onSelectChatId: (chatId) => set({ selectedChatId: chatId }),
}));
