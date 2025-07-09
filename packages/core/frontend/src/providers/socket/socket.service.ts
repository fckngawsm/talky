import { io, Socket } from "socket.io-client";
export class SocketService {
  static #instance: SocketService;
  #socket: Socket | null = null;

  private constructor() {}

  public static get getInstance(): SocketService {
    if (!SocketService.#instance) {
      SocketService.#instance = new SocketService();
    }
    return SocketService.#instance;
  }

  connect(userId: number) {
    if (!this.#socket) {
      this.#socket = io("http://localhost:3004", {
        query: { userId },
        transports: ["websocket"],
        autoConnect: true,
      });

      this.#socket.on("connect", () => {
        console.log("✅ Connected to server:", this.#socket?.id);
      });

      this.#socket.on("disconnect", () => {
        console.log("❌ Disconnected from server");
      });
    }
  }

  disconnect() {
    this.#socket?.disconnect();
    this.#socket = null;
  }

  on(event: string, handler: (...args: any[]) => void) {
    this.#socket?.on(event, handler);
  }

  off(event: string, handler?: (...args: any[]) => void) {
    this.#socket?.off(event, handler);
  }

  emit(event: string, payload: any) {
    this.#socket?.emit(event, payload);
  }

  get socket(): Socket | null {
    return this.#socket;
  }
}
