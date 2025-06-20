import { api } from "@/shared/libs/axios";
import type { RegisterFormData } from "./session-register.types";

export const registerUser = async (data: RegisterFormData) => api.post("/auth/sign-up", data);
