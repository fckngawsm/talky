import { z } from "zod";

export const ConfirmOtpSchema = z.object({
  phone: z.string(),
  code: z.string().min(4).max(4),
});
