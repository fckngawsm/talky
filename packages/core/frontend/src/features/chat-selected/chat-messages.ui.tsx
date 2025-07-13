export const MessageItem = ({ content }) => {
  return <li className="message__item">{content}</li>;
};

export const MessageList = () => {
  return (
    <ul className="chat__messages">
      {[].map((m, index) => (
        <MessageItem key={index} content={m.content} />
      ))}
    </ul>
  );
};
