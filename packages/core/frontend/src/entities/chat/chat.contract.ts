import z from "zod";

export const CreateDialogSchema = z.object({
  isGroup: z.boolean(),
  name: z.string().min(4).max(4),
  memberIds: z.array(z.number()),
});
