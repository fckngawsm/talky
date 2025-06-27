import { api } from "@/shared/libs/axios";

type GetCurrentUser = () => Promise<any>;

export const getCurrentUser: GetCurrentUser = () => api.get("/users/me");
