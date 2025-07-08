import type { Dialog } from "@/entities/chat/chat.types";
import { create } from "zustand";

interface ChatStore {
  selectedChatId: Dialog["id"] | null;
  onSelectChat: (chatId: Dialog["id"]) => void;
}

export const useChat = create<ChatStore>((set) => ({
  selectedChatId: null,
  onSelectChat: (chatId) => set({ selectedChatId: chatId }),
}));
