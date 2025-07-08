import { BasedLink } from "@/shared/ui/link/link.ui";
import { ArrowRightIcon } from "@radix-ui/react-icons";

import { useSearchChatContext } from "@/entities/chat/chat.context";
import { StyledRootTextFieldController } from "@/shared/ui/input-controller/input-controller.styled";
import { StyledChatHeader } from "./chat-header.styled";

export const ChatHeader = () => {
  const { searchValue, onChange } = useSearchChatContext();
  return (
    <StyledChatHeader>
      <BasedLink to="/profile" icon={<ArrowRightIcon cursor="pointer" />} linkText="Профиль" />
      <StyledRootTextFieldController
        size="3"
        onChange={onChange}
        value={searchValue}
        placeholder="Найти контакт"
      />
    </StyledChatHeader>
  );
};
