import { api } from "@/shared/libs/axios";
import type { ConfirmOtpData } from "./session-confirm-phone.types";

export const confirmOtp = async (data: ConfirmOtpData) => api.post("/auth/confirm-otp", data);
