import { getDialogs } from "@/entities/chat/chat.api";
import { useCurrentUser } from "@/providers/store/user.store";
import { dialogQueryKeys } from "@/shared/query-keys/dialog";
import { useQuery } from "@tanstack/react-query";

export const useGetDialogs = () => {
  const { currentUser } = useCurrentUser();
  console.log(currentUser, "curre");
  return useQuery({
    queryKey: dialogQueryKeys.dialogsByUserId(currentUser.id),
    queryFn: getDialogs,
    enabled: Boolean(currentUser?.id),
    refetchOnWindowFocus: false,
  });
};
