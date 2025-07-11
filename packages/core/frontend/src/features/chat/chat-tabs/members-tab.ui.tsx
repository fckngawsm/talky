import { useSearchChatContext } from "@/entities/chat/chat.context";
import { useGetUsersBySearchValue } from "@/entities/user/user.api";
import { ChatDialogUserItem } from "../chat-dialog-user-item/chat-dialog-user-item.ui";
import { StyledEmptyTabContent } from "./chat-tabs.styled";

export const MembersTab = () => {
  const { searchValue } = useSearchChatContext();
  const { data: foundedUsers } = useGetUsersBySearchValue(searchValue);

  if (!foundedUsers?.length)
    return <StyledEmptyTabContent>Контаков не найдно</StyledEmptyTabContent>;

  return (
    <>
      {foundedUsers.map((user) => (
        <ChatDialogUserItem key={user.id} user={user} />
      ))}
    </>
  );
};
