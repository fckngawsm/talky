import { Dialog, User } from "../../types";

export class ChatRequestContract {
  isGroup: boolean;
  name: string;
  memberIds: Array<User["id"]>;
}

export class ChatResponseContract {
  status: string;
  message?: string;
}

export class DialogsRequestContract {
  userId: number;
}

export class DialogsResponseContract {
  dialogs: Dialog[];
}
