import { Body, Controller, Get, Param, Post, Req, UseGuards } from "@nestjs/common";
import { CookieAuthGuard } from "src/common/guards/cookie-auth.guard";
import { AuthenticatedRequest } from "src/common/types/authenticated-request";
import { ChatService } from "./chat.service";
import { ChatDto } from "./dto/chat.dto";

@UseGuards(CookieAuthGuard)
@Controller("chats")
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Post("")
  createDialog(@Body() dto: ChatDto, @Req() req: AuthenticatedRequest) {
    const memberIds = [req.user.id, ...dto.memberIds];
    return this.chatService.createChat({
      ...dto,
      memberIds,
    });
  }

  @Get("")
  getDialogs(@Req() req: AuthenticatedRequest) {
    return this.chatService.getDialogs({
      userId: req.user.id,
    });
  }

  @Get(":id")
  getDialogById(@Param("id") id: string) {
    console.log("called getDialogById");
    return this.chatService.getDialogById({ dialogId: Number(id) });
  }
}
