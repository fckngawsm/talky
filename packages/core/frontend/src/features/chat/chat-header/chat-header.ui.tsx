import { useDebounce } from "@/shared/hooks/useDebounce";
import { InputController } from "@/shared/ui/input-controller/input-controller.ui";
import { CustomLink } from "@/shared/ui/link.ui";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRightIcon } from "@radix-ui/react-icons";
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

  const debouncedSearchValue = useDebounce({
    value: searchValue,
  });

  useEffect(() => {
    if (debouncedSearchValue.trim()) {
    }
  });

  return (
    <StyledChatHeader>
      <CustomLink to="/profile" icon={<ArrowRightIcon cursor="pointer" />} linkText="Профиль" />
      <InputController name="search" placeholder="Поиск" control={control} />
    </StyledChatHeader>
  );
};
