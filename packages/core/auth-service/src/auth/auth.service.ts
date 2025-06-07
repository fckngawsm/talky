import { Injectable } from "@nestjs/common";
import { MessagePattern } from "@nestjs/microservices";

@Injectable()
export class AuthService {
  @MessagePattern({ cmd: "verifyToken" })
  verifyToken(data: { token: string }) {
    const isValid = this.validateToken(data.token);
    return { valid: isValid, userId: "123" };
  }

  @MessagePattern({ cmd: "generateToken" })
  generateToken(data: { userId: string }) {
    return { token: this.createJwtToken(data.userId) };
  }

  private validateToken(token: string): boolean {
    return token === "valid_token";
  }

  private createJwtToken(userId: string): string {
    return `jwt.${userId}.signature`;
  }
}
