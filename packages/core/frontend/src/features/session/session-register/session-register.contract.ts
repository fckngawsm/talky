import { phoneRegex } from "@/entities/session/session.contants";
import { z } from "zod";

export const RegisterSchema = z.object({
  phone: z.string().regex(phoneRegex, "Неверный формат номера телефона"),
});
