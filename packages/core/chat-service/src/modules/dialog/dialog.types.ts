import { User } from "@talky/types";

export interface CreateDialog {
  isGroup: boolean;
  name: string;
  memberIds: Array<User["id"]>;
}
