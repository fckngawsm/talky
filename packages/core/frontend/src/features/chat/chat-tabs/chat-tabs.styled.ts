import { Tabs, Text } from "@radix-ui/themes";
import styled from "styled-components";

export const StyledChatTabsList = styled(Tabs.List)`
  display: flex;
  justify-content: center;
  padding: 8px;
`;

export const StyledChatTabsTrigger = styled(Tabs.Trigger)`
  cursor: pointer;
  &[data-state="active"] {
    color: #3e63dd;
    font-size: 14px;
    font-weight: 500;
    line-height: 1;
  }

  &[data-state="active"]::before {
    background-color: transparent;
  }
`;

export const StyledEmptyTabContent = styled(Text)`
  font-size: 16px;
  color: #3e63dd;
  text-align: center;
  display: block;
  margin-top: 20px;
`;

export const StyledTabsContent = styled(Tabs.Content)`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
