import { api } from "@/shared/libs/axios";

type GetCurrentUser = () => Promise<any>;

export const getCurrentUser: GetCurrentUser = () => api.get("/users/me");

export const login = (phone: string) => api.post("auth/sign-in", { phone });
