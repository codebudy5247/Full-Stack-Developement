import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

require('dotenv').config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const port = process.env.PORT
  await app.listen(port);
  console.info(`server up and running on port ${port} `);
}
bootstrap();
