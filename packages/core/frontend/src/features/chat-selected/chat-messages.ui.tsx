import { useChat } from "@/providers/store/chat.store";

export const MessageItem = ({ content }) => {
  return <li className="message__item">{content}</li>;
};

export const MessageList = () => {
  const { selectedChat } = useChat();
  return (
    <ul className="chat__messages">
      {selectedChat?.messages.map((m, index) => (
        <MessageItem key={index} content={m.content} />
      ))}
    </ul>
  );
};
