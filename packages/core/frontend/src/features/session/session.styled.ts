import { Box, Text } from "@radix-ui/themes";
import styled from "styled-components";

export const StyledSessionFormTitle = styled(Text)`
  font-size: 20px;
  font-weight: 500;
  line-height: 20px;
  text-align: center;
  margin: 0;
  margin-bottom: 40px;
`;

export const StyledSessionFormWrapper = styled(Box)`
  max-width: 340px;
  width: 100%;
  padding: 50px 30px 30px;
  max-height: fit-content;
  min-height: 450px;
  box-shadow: 0 0 6px 0 rgb(0 0 0 / 14%);
  border-radius: 12px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

export const StyledSessionForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  width: 100%;
`;
