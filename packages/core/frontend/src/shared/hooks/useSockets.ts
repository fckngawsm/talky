import { SocketService } from "@/providers/socket/socket.service";
import { useCurrentUser } from "@/providers/store/user.store";
import { useEffect } from "react";

export const useSockets = () => {
  const { currentUser } = useCurrentUser();
  const socketService = SocketService.getInstance;

  useEffect(() => {
    if (currentUser.id) socketService.connect(currentUser.id);

    return () => socketService.disconnect();
  }, [currentUser]);
};
