import { api } from "@/shared/libs/axios";
import { userQueryKeys } from "@/shared/query-keys/user";
import type { User } from "@talky/types";
import { useQuery } from "@tanstack/react-query";

export const getUsersBySearchValue = (searchValue: string): Promise<User[] | null> =>
  api.get("/users/contact", {
    params: {
      searchValue,
    },
  });

export const useGetUsersBySearchValue = (searchValue: string) => {
  return useQuery({
    queryKey: userQueryKeys.usersBySearchValue(searchValue),
    queryFn: () => getUsersBySearchValue(searchValue),
    refetchOnWindowFocus: false,
    enabled: Boolean(searchValue),
  });
};
