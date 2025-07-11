import { useDebounce } from "@/shared/hooks/useDebounce";
import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ChangeEvent,
  type PropsWithChildren,
} from "react";

interface ChatContext {
  rawSearchValue: string;
  searchValue: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const ChatContext = createContext<ChatContext | null>(null);

export const ChatContextProvider = ({ children }: PropsWithChildren) => {
  const [rawSearchValue, setRawSearchValue] = useState("");

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setRawSearchValue(e.target.value);
  };

  const debouncedValue = useDebounce({ value: rawSearchValue, delay: 400 });

  const value = useMemo(
    () => ({
      rawSearchValue,
      searchValue: debouncedValue,
      onChange,
    }),
    [rawSearchValue, debouncedValue],
  );

  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
};

export const useSearchChatContext = () => {
  const context = useContext(ChatContext);

  if (!context) {
    throw new Error("ChatContext must be used within ChatContextProvider");
  }
  return context;
};
