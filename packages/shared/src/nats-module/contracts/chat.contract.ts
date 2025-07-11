import { User } from "../../types";

export class ChatRequestContract {
  isGroup: boolean;
  name: string;
  memberIds: Array<User["id"]>;
}

export class ChatResponseContract {
  status: string;
  message?: string;
}
