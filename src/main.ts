import { NestFactory } from '@nestjs/core';
import { AppModule } from './core/app.module';

async function main() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(4000);
}
main();
