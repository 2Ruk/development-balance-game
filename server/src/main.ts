import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
import { HttpExceptionFilter } from '@app/share-library/filter/http-exception.filter';
import { ValidationPipe } from '@nestjs/common';
import * as process from 'process';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalPipes(new ValidationPipe());

  // Enable CORS
  app.enableCors({
    origin: process.env.NODE_ENV
      ? 'https://app.itquiz.co.kr'
      : 'http://localhost:3000',
    credentials: true,
  });
  app.use(cookieParser());

  // 배포에는 3000 포트로, 개발에는 3030 포트로 실행
  await app.listen(3000);
}
bootstrap();
