import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { NatsTransportModule } from "@talky/nats-module";
import { ChatModule } from "./modules/chat/chat.module";
import { DialogModule } from "./modules/dialog/dialog.module";
@Module({
  imports: [
    ChatModule,
    DialogModule,
    NatsTransportModule,
    ConfigModule.forRoot({
      envFilePath: ".development.env",
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      useFactory: async (configService: ConfigService) => {
        return {
          type: "postgres",
          host: configService.get("DB_HOST"),
          port: parseInt(configService.get("DB_PORT"), 10),
          username: configService.get("DB_USER"),
          password: configService.get("DB_PASSWORD"),
          database: configService.get("DB_NAME"),
          entities: [__dirname + "/**/*.entity{.ts,.js}"],
          synchronize: configService.get("NODE_ENV") === "development",
        };
      },
      inject: [ConfigService],
    }),
  ],
})
export class AppModule {}
