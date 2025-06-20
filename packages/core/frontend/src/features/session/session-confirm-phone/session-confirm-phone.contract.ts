import { phoneRegex } from "@/entities/session/session.contants";
import { z } from "zod";

export const ConfirmOtpSchema = z.object({
  phone: z.string().regex(phoneRegex, "Неверный формат номера телефона"),
  code: z.string().min(4).max(4),
});
