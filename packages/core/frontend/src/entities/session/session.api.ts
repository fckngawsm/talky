import { api } from "@/shared/libs/axios";

export const getCurrentUser = () => api.get("/users/me");
