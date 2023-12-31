import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  const config = app.get(ConfigService)
  console.log("DB_URL", config.get('DATABASE_URL'))
}
bootstrap();
