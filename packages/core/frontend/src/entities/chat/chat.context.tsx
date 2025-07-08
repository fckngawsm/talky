import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ChangeEvent,
  type PropsWithChildren,
} from "react";

interface ChatContext {
  searchValue: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const ChatContext = createContext<ChatContext | null>(null);

export const ChatContextProvider = ({ children }: PropsWithChildren) => {
  const [searchValue, setSearchValue] = useState("");
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const value = useMemo(() => ({ searchValue, onChange }), [searchValue]);

  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
};

export const useSearchChatContext = () => {
  const context = useContext(ChatContext);

  if (!context) {
    throw new Error("ChatContext must be used within ChatContextProvider");
  }
  return context;
};
