import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { NatsTransportModule } from "@talky/nats-module";
import { UsersModule } from "./modules/users/users.module";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql",
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT, 10),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [__dirname + "/**/*.entity{.ts,.js}"],
      synchronize: process.env.NODE_ENV === "development",
    }),
    UsersModule,
    NatsTransportModule,
  ],
})
export class AppModule {}
