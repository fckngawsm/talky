import { Injectable } from "@nestjs/common";

@Injectable()
export class AuthService {
  async signIn(phone: string, password: string) {}
  async signUp(phone: string) {}
}
