import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { AuthModule } from "./modules/auth/auth.module";
import { ChatModule } from "./modules/chat/chat.module";
import { UsersModule } from "./modules/users/users.module";
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ".development.env",
      isGlobal: true,
    }),
    ChatModule,
    AuthModule,
    UsersModule,
  ],
})
export class AppModule {}
