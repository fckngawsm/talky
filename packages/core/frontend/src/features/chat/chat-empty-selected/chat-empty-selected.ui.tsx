import { StyledEmptyContainer, StyledEmptyText } from "./chat-empty-selected.styled";

export const ChatEmptySelected = () => {
  return (
    <StyledEmptyContainer>
      <StyledEmptyText>Выберите чат, чтобы отправить сообщение</StyledEmptyText>
    </StyledEmptyContainer>
  );
};
