// import { identifyUser } from "@/providers/logger/highlight-run";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getCurrentUser } from "./session.api";

export const useAuth = () => {
  const navigate = useNavigate();

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
      if (!user) {
        console.log("now not user");
        navigate("/sign-in", { replace: true });
      } else {
        navigate("/");
      }
    }
  }, [isLoading, user, navigate]);

  return { user, error, isLoading };
};
