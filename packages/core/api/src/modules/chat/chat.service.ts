import { Inject, Injectable } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import {
  CHAT_PATTERNS,
  ChatRequestContract,
  ChatResponseContract,
  DialogsRequestContract,
  DialogsResponseContract,
} from "@talky/nats-module";
import { lastValueFrom } from "rxjs";

@Injectable()
export class ChatService {
  constructor(@Inject("NATS_SERVICE") private readonly natsClient: ClientProxy) {}

  async createChat({ name, memberIds, isGroup }: ChatRequestContract) {
    const { status, message } = await lastValueFrom(
      this.natsClient.send<ChatResponseContract, ChatRequestContract>(
        CHAT_PATTERNS.COMMAND_CHAT_CREATE,
        { name, memberIds, isGroup },
      ),
    );

    if (status !== "ok") {
      throw new Error("Произошла ошибка при отправки кода");
    }

    return message;
  }

  async getDialogs({ userId }: DialogsRequestContract) {
    const { dialogs } = await lastValueFrom(
      this.natsClient.send<DialogsResponseContract, DialogsRequestContract>(
        CHAT_PATTERNS.QUERY_DIALOGS_GET,
        { userId },
      ),
    );

    return dialogs;
  }
}
