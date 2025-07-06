// import { identifyUser } from "@/providers/logger/highlight-run";
import { useCurrentUser } from "@/providers/store/user.store";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getCurrentUser } from "./session.api";

export const useAuth = () => {
  const navigate = useNavigate();
  const { setUser } = useCurrentUser();

  const {
    data: user,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["currentUser"],
    queryFn: getCurrentUser,
    retry: false,
  });

  useEffect(() => {
    if (!isLoading) {
      if (!user?.id) {
        navigate("/sign-in", { replace: true });
      } else {
        setUser(user);
        navigate("/");
      }
    }
  }, [isLoading, user, navigate]);

  return { user, error, isLoading };
};
