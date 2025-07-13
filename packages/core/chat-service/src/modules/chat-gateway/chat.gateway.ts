import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  WebSocketGateway,
  WebSocketServer,
} from "@nestjs/websockets";
import { Server, Socket } from "socket.io";

@WebSocketGateway({
  cors: {
    origin: "*",
  },
})
export class ChatGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  afterInit() {
    console.log("🚀 WebSocket gateway initialized");
  }

  handleConnection(client: Socket) {
    const userId = client.handshake.query.userId;
    console.log("✅ Client connected:", userId);
  }

  handleDisconnect(client: Socket) {
    console.log("❌ Client disconnected:", client.id);
  }
}
