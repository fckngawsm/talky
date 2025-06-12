import type { Dialog } from "@/entities/chat/chat.types";
import { create } from "zustand";

interface ChatStore {
  selectedChat: Dialog | null;
  onSelectChat: (chat: Dialog) => void;
}

export const useChat = create<ChatStore>((set) => ({
  selectedChat: null,
  onSelectChat: (chat) => set({ selectedChat: chat }),
}));
