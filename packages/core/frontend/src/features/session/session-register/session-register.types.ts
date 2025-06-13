import type { z } from "zod";
import type { RegisterSchema } from "./session-register.contract";

export type RegisterFormData = z.infer<typeof RegisterSchema>;
