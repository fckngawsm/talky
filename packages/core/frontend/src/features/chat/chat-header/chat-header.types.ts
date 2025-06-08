import type { z } from "zod";
import type { SearchChatSchema } from "./chat-header.contract";

export type ChatSearch = z.infer<typeof SearchChatSchema>;
