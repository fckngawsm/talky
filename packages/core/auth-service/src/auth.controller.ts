import { Controller } from "@nestjs/common";
import { MessagePattern, Payload } from "@nestjs/microservices";
import { AUTH_PATTERNS, AuthSignContract, AuthSignResponseContract } from "@talky/nats-module";

@Controller()
export class AuthController {
  @MessagePattern(AUTH_PATTERNS.COMMAND_AUTH_REGISTER)
  async handleRegister(@Payload() data: AuthSignContract): Promise<AuthSignResponseContract> {
    const userId = "generated-user-id";
    const token = "generated-jwt-token";

    return {
      userId,
      token,
    };
  }
}
