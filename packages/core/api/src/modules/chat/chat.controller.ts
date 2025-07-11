import { Body, Controller, Get, Post, UseGuards } from "@nestjs/common";
import { CookieAuthGuard } from "src/common/guards/cookie-auth.guard";
import { ChatService } from "./chat.service";
import { ChatDto } from "./dto/chat.dto";

@UseGuards(CookieAuthGuard)
@Controller("chats")
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Get("")
  getCurrentUser() {}

  @Post("")
  createChat(@Body() dto: ChatDto) {
    return this.chatService.createChat(dto);
  }
}
