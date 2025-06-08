import { InputController } from "@/src/shared/ui/input-controller.ui";
import { CustomLink } from "@/src/shared/ui/link.ui";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm, useWatch } from "react-hook-form";
import { ChatSearchDefaultValue } from "./chat-header.constants";
import { SearchChatSchema } from "./chat-header.contract";
import { StyledChatHeader } from "./chat-header.styled";
import type { ChatSearch } from "./chat-header.types";

export const ChatHeader = () => {
  const { handleSubmit, control } = useForm<ChatSearch>({
    mode: "onChange",
    defaultValues: ChatSearchDefaultValue,
    resolver: zodResolver(SearchChatSchema),
  });

  const searchValue = useWatch({
    control,
    name: "search",
    defaultValue: "",
  });

  useEffect(() => {
    if (searchValue) {
    }
  });

  return (
    <StyledChatHeader>
      <CustomLink to="/profile" />
      <InputController name="search" placeholder="Поиск" control={control} />
    </StyledChatHeader>
  );
};
