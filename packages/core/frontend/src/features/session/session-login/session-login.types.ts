import type { z } from "zod";
import type { LoginSchema } from "./session-login.contract";

export type LoginFormData = z.infer<typeof LoginSchema>;
