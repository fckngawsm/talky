import { Dialog, DialogWithMessages, User } from "../../types";

export class ChatRequestContract {
  isGroup: boolean;
  name: string;
  avatarUrl: string;
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

export class DialogByIdRequestContract {
  dialogId: number;
}

export class DialogByIdResponseContract {
  chat: DialogWithMessages;
}
