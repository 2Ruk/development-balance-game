import { Module } from '@nestjs/common';
import { ShareLibraryService } from './share-library.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { configSetting, dbSetting } from '@app/share-library/config/config';

@Module({
  imports: [
    ConfigModule.forRoot(configSetting()),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: dbSetting,
    }),
  ],
  providers: [ShareLibraryService],
  exports: [ShareLibraryService],
})
export class ShareLibraryModule {}
