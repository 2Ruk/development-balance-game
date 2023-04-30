import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm/dist/interfaces/typeorm-options.interface';
import { QuestionEntity } from '@src/balance/question/entities/question.entity';
import { AnswerEntity } from '@src/balance/answer/entities/answer.entity';
import { APP_FILTER, APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { ThrottlerGuard } from '@nestjs/throttler';
import { HttpExceptionFilter } from '@app/share-library/filter/http-exception.filter';
import { LoggingInterceptor } from '@app/share-library/interceptors/logging.interceptor';

export const configSetting = () => {
  const isProduction = process.env.NODE_ENV === 'production';
  return {
    isGlobal: true,
    envFilePath: isProduction ? '.env.prod' : '.env.dev',
  };
};

export const dbSetting = async (
  configService: ConfigService,
): Promise<TypeOrmModuleOptions> => {
  const dbHost = configService.get<string>('DB_HOST');
  const dbPort = configService.get<number>('DB_PORT');
  const dbUsername = configService.get<string>('DB_USERNAME');
  const dbPassword = configService.get<string>('DB_PASSWORD');
  const dbDatabase = configService.get<string>('DB_DATABASE');

  return {
    type: 'mysql',
    host: dbHost,
    port: dbPort,
    username: dbUsername,
    password: dbPassword,
    database: dbDatabase,
    entities: [QuestionEntity, AnswerEntity],
    synchronize: true,
    poolSize: 10,
  };
};

export const AppGuard = () => {
  const guardList = [ThrottlerGuard];
  return guardList.map((guard) => ({
    provide: APP_GUARD,
    useClass: guard,
  }));
};

export const AppFilter = () => {
  const filterList = [HttpExceptionFilter];
  return filterList.map((filter) => ({
    provide: APP_FILTER,
    useClass: filter,
  }));
};
export const AppInterceptor = () => {
  const interceptorList = [LoggingInterceptor];

  return interceptorList.map((interceptor) => ({
    provide: APP_INTERCEPTOR,
    useClass: interceptor,
  }));
};

export const AppCommonProvider = [
  ...AppGuard(),
  ...AppFilter(),
  ...AppInterceptor(),
];
