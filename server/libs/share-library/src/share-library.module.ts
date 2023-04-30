import { Module } from '@nestjs/common';
import { ShareLibraryService } from './share-library.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { configSetting, dbSetting } from '@app/share-library/config/config';
import { CacheModule } from '@nestjs/cache-manager';
import { ThrottlerModule } from '@nestjs/throttler';

@Module({
  imports: [
    ConfigModule.forRoot(configSetting()),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: dbSetting,
    }),
    // cache manger v5 에서는 ttl 이 milliseconds 단위로 변경됨
    CacheModule.register({
      ttl: 3000,
      max: 10,
      isGlobal: true,
    }),
    ThrottlerModule.forRoot({ ttl: 1, limit: 60 }),
  ],
  providers: [ShareLibraryService],
  exports: [ShareLibraryService],
})
export class ShareLibraryModule {}
