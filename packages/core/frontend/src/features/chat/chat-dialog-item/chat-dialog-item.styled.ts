import { Text } from "@radix-ui/themes";
import styled from "styled-components";

export const StyledChatDialogItemWrapper = styled.div<{
  $isSelected?: boolean;
}>`
  padding: 12px;
  border-top: 1px solid rgb(239, 239, 239);
  display: flex;
  gap: 10px;
  width: 100%;
  box-sizing: border-box;
  cursor: pointer;
  background-color: ${({ $isSelected }) => ($isSelected ? "rgb(228, 237, 253)" : "transparent")};
`;

export const StyledChatInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 15px;
  width: 100%;
`;

export const StyledChatInfoUserNameText = styled(Text)`
  font-size: 13px;
  font-weight: 600;
  line-height: 1;
  margin: 0;
`;

export const StyledChatInfoLastMessageText = styled(Text)`
  font-size: 12px;
  font-weight: 500;
  line-height: 1.2;
  color: rgb(153 153 153 / 100%);
  margin: 0;
`;

export const StyledChatAdditionalInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const StyledChatAdditionalInfoTime = styled(Text)`
  color: rgb(153 153 153 / 100%);
  font-size: 9px;
  line-height: 1.4;
  margin: 0;
  font-weight: 500;
`;

export const StyledChatAdditionalUnreadMessageCount = styled(Text)`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: #7d66d9;
  color: #ffffff;
  width: 20px;
  height: 20px;
  font-size: 11px;
  font-weight: 500;
  margin: 0 auto;
`;
