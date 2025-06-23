import { BasedButton } from "@/shared/ui/button/button.ui";
import { Box, Text } from "@radix-ui/themes";
import styled from "styled-components";

export const StyledSessionFormTitle = styled(Text)`
  font-size: 24px;
  font-weight: 500;
  line-height: 20px;
  text-align: center;
  margin: 0;
  margin-bottom: 20px;
`;

export const StyledSessionFormWrapper = styled(Box)`
  max-width: 540px;
  width: 100%;
  padding: 0 30px 30px 50px;
  max-height: fit-content;
  min-height: fit-content;
  border-radius: 12px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const StyledSessionForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  width: 100%;
`;

export const StyledPasswordFieldsWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyledPasswordField = styled.input`
  width: 3rem;
  height: 3rem;
  margin: 0 0.25rem;
  font-size: 1.5rem;
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  transition:
    border-color 0.2s,
    box-shadow 0.2s;

  &:focus {
    outline: none;
    border-color: #4f46e5;
    box-shadow: 0 0 0 2px rgba(79, 70, 229, 0.3);
  }

  &::placeholder {
    color: #bbb;
  }
`;

export const StyledSessionDescription = styled(Text)`
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  text-align: center;
  margin: 0;
  margin-bottom: 20px;
`;

export const StyledSessionButton = styled(BasedButton)`
  height: 50px;
`;
