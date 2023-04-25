import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuestionModule } from './balance/question/question.module';
import { AnswerModule } from './balance/answer/answer.module';
import { BalanceModule } from './balance/balance.module';
import { ShareLibraryModule } from '@app/share-library';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { APP_FILTER, APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { HttpExceptionFilter } from '@app/share-library/filter/http-exception.filter';
import { LoggingInterceptor } from '@app/share-library/interceptors/logging.interceptor';
import { CacheInterceptor, CacheModule } from '@nestjs/cache-manager';

@Module({
  imports: [
    // cache manger v5 에서는 ttl 이 milliseconds 단위로 변경됨
    CacheModule.register({
      ttl: 3000,
      max: 10,
      isGlobal: true,
    }),
    QuestionModule,
    AnswerModule,
    BalanceModule,
    ShareLibraryModule,
    ThrottlerModule.forRoot({ ttl: 5, limit: 60 }),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    },

    {
      /**
       * CacheInterceptor
       */
      provide: APP_INTERCEPTOR,
      useClass: CacheInterceptor,
    },
  ],
})
export class AppModule {}
