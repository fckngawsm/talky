import { Controller } from "@nestjs/common";
import { MessagePattern, Payload, RpcException } from "@nestjs/microservices";
import { CHAT_PATTERNS, ChatRequestContract, ChatResponseContract } from "@talky/nats-module";
import { DialogService } from "./dialog.service";

@Controller()
export class DialogController {
  constructor(private readonly dialogService: DialogService) {}

  @MessagePattern(CHAT_PATTERNS.COMMAND_CHAT_CREATE)
  async handleGetUserByPhone(@Payload() data: ChatRequestContract): Promise<ChatResponseContract> {
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
}
