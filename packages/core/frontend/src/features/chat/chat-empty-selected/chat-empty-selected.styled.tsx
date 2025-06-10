import { Container, Text } from "@radix-ui/themes";
import styled from "styled-components";

export const StyledEmptyContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 75%;
`;

export const StyledEmptyText = styled(Text)`
  color: #3e63dd;
  font-size: 12px;
  font-weight: 500;
  line-height: 1;
  text-align: center;
`;
