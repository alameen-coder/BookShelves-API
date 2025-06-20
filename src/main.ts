import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true, // automatically convert types
      whitelist: true, // remove properties not in DTO
      forbidNonWhitelisted: true, // throw error if extra props
    }),
  );

  await app.listen(3000);
}
bootstrap()
  .then(() => {
    console.log('Bookshelf API is running on http://localhost:3000');
  })
  .catch((err) => {
    console.error('Failed to start Bookshelf API:', err);
    process.exit(1);
  });
