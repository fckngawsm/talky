import { createDialog } from "@/entities/chat/chat.api";
import { useSearchChatContext } from "@/entities/chat/chat.context";
import { useGetUsersBySearchValue } from "@/entities/user/user.api";
import { ChatDialogUserItem } from "../chat-dialog-user-item/chat-dialog-user-item.ui";
import { StyledEmptyTabContent } from "./chat-tabs.styled";

export const MembersTab = () => {
  const { searchValue } = useSearchChatContext();
  const { data: foundedUsers } = useGetUsersBySearchValue(searchValue);

  if (!foundedUsers?.length)
    return <StyledEmptyTabContent>Контаков не найдно</StyledEmptyTabContent>;

  const onCreateDialog = async (memberIds: number[], name: string, avatarUrl: string) => {
    await createDialog({
      isGroup: false,
      avatarUrl,
      memberIds,
      name,
    });
  };

  return (
    <>
      {foundedUsers.map((user) => (
        <ChatDialogUserItem
          key={user.id}
          user={user}
          onCreateDialog={() => onCreateDialog([user.id], user.login, user.avatar)}
        />
      ))}
    </>
  );
};
