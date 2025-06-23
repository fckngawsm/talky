import { phoneRegex } from "@/entities/session/session.constants";
import { z } from "zod";

export const LoginSchema = z.object({
  phone: z.string().regex(phoneRegex, "Неверный формат номера телефона"),
});
