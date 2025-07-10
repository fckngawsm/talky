import { api } from "@/shared/libs/axios";
import type { User } from "@talky/types";
type GetCurrentUser = () => Promise<User>;
type Login = (phone: string) => Promise<void>;

export const getCurrentUser: GetCurrentUser = () => api.get("/users/me");

export const login: Login = (phone) => api.post("auth/sign-in", { phone });
