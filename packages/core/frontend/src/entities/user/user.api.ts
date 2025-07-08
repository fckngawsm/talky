import { api } from "@/shared/libs/axios";
import type { User } from "@/shared/types/User";
import { useQuery } from "@tanstack/react-query";

export const getUsersBySearchValue = (searchValue: string): Promise<User[] | null> =>
  api.get("/users/contact", {
    params: {
      searchValue,
    },
  });

export const useGetUsersBySearchValue = (searchValue: string) => {
  return useQuery({
    queryKey: ["users", "contact", searchValue],
    queryFn: () => getUsersBySearchValue(searchValue),
    refetchOnWindowFocus: false,
    enabled: Boolean(searchValue),
  });
};
