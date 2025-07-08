import { BasedLink } from "@/shared/ui/link/link.ui";
import { ArrowRightIcon } from "@radix-ui/react-icons";

import { StyledRootTextFieldController } from "@/shared/ui/input-controller/input-controller.styled";
import { useState, type ChangeEvent } from "react";
import { StyledChatHeader } from "./chat-header.styled";

export const ChatHeader = () => {
  const [value, setValue] = useState("");

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <StyledChatHeader>
      <BasedLink to="/profile" icon={<ArrowRightIcon cursor="pointer" />} linkText="Профиль" />
      <StyledRootTextFieldController size="3" onChange={onChange} placeholder="Найти контакт" />
    </StyledChatHeader>
  );
};
