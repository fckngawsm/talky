import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { NatsTransportModule } from "@talky/nats-module";
import { UsersOtpModule } from "./modules/users-otp/users-otp.module";
import { UsersModule } from "./modules/users/users.module";
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ".development.env",
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      useFactory: async (configService: ConfigService) => ({
        type: "mysql",
        host: configService.get("DB_HOST"),
        port: configService.get("DB_PORT"),
        username: configService.get("DB_USER"),
        password: configService.get("DB_PASSWORD"),
        database: configService.get("DB_NAME"),
        entities: [__dirname + "/**/*.entity{.ts,.js}"],
        synchronize: configService.get('NODE_ENV === "development"'),
      }),
    }),
    NatsTransportModule,
    UsersModule,
    UsersOtpModule,
  ],
})
export class AppModule {}
