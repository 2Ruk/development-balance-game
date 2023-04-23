import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm/dist/interfaces/typeorm-options.interface';
import { QuestionEntity } from '@src/balance/question/entities/question.entity';

export const configSetting = () => {
  const isProduction = process.env.NODE_ENV === 'production';
  return {
    isGlobal: true,
    envFilePath: isProduction ? '.env' : '.env.dev',
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
    entities: [QuestionEntity],
    synchronize: true,
    poolSize: 10,
  };
};
