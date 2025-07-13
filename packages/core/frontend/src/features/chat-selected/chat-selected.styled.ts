import { Text } from "@radix-ui/themes";
import styled from "styled-components";

export const StyledSelectedChatWrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: 100%;
  max-width: 100%;
  width: 100%;
`;

export const StyledChatHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgb(239 239 239 / 100%);
  padding: 10px;
`;

export const StyledChatHeaderContentWrapper = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const StyledChatHeaderTitle = styled(Text)`
  font-weight: 600;
  font-size: 13px;
  line-height: 1;
  margin: 0;
  color: rgb(30 30 30 / 100%);
`;

export const StyledChatForm = styled.form`
  display: flex;
  align-items: center;
  gap: 15px;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
`;
