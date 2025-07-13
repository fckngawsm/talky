import { Controller } from "@nestjs/common";
import { MessagePattern, Payload, RpcException } from "@nestjs/microservices";
import {
  CHAT_PATTERNS,
  ChatRequestContract,
  ChatResponseContract,
  DialogsRequestContract,
  DialogsResponseContract,
} from "@talky/nats-module";
import { DialogService } from "./dialog.service";

@Controller()
export class DialogController {
  constructor(private readonly dialogService: DialogService) {}

  @MessagePattern(CHAT_PATTERNS.COMMAND_CHAT_CREATE)
  async handleCreateDialog(@Payload() data: ChatRequestContract): Promise<ChatResponseContract> {
    const createdDialog = await this.dialogService.createDialog({
      isGroup: data.isGroup,
      name: data.name,
      memberIds: data.memberIds,
    });

    if (!createdDialog) {
      throw new RpcException("Произошла ошибка при создании чата");
    }

    return {
      status: "ok",
      message: "Чат успешно создан",
    };
  }

  @MessagePattern(CHAT_PATTERNS.QUERY_DIALOGS_GET)
  async handleGetUserChat(
    @Payload() data: DialogsRequestContract,
  ): Promise<DialogsResponseContract> {
    const dialogs = await this.dialogService.getDialogs(data.userId);

    return {
      dialogs,
    };
  }
}
