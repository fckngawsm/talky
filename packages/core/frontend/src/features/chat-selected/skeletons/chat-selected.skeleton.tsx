import { Flex, Skeleton } from "@radix-ui/themes";
import { StyledSelectedChatWrapper } from "../chat-selected.styled";

export const ChatSelectedSkeleton = () => {
  return (
    <StyledSelectedChatWrapper>
      <Flex align="center" gap="3" p="3">
        <Skeleton width="40" height="40" />
        <Skeleton height="20" width="30%" />
      </Flex>

      <Flex flexGrow="1" px="3" py="2">
        <Skeleton height="80" mb="2" />
        <Skeleton height="60" width="50%" />
        <Skeleton height="40" width="70%" mt="2" />
      </Flex>

      <Flex p="3">
        <Skeleton width="40" height="40" />
        <Skeleton width="100%" height="40" />
        <Skeleton width="40" height="40" />
      </Flex>
    </StyledSelectedChatWrapper>
  );
};
