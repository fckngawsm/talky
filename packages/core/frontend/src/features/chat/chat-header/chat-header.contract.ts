import { z } from "zod";

export const SearchChatSchema = z.object({
  search: z.string().min(1),
});
