import { NestFactory } from "@nestjs/core";
import { Transport } from "@nestjs/microservices";
import { AppModule } from "./app.module";
import { GlobalHttpExceptionFilter } from "./common/filters/global-http-exception.filter";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new GlobalHttpExceptionFilter());
  app.enableCors({
    // TODO: добавить в env
    origin: "http://localhost:3000",
    credentials: true,
  });
  app.connectMicroservice({
    transport: Transport.NATS,
    options: {
      servers: ["nats://nats:4222"],
    },
  });
  await app.startAllMicroservices();
  await app.listen(process.env.PORT ?? 3001);
}
bootstrap();
