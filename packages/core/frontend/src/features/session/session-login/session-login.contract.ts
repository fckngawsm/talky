import { z } from "zod";

const phoneRegex = new RegExp(/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/);

export const LoginSchema = z.object({
  phone: z.string().regex(phoneRegex, "Неверный формат номера телефона"),
});
