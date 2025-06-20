import type { z } from "zod";
import type { ConfirmOtpSchema } from "./session-confirm-phone.contract";

export type ConfirmOtpData = z.infer<typeof ConfirmOtpSchema>;
