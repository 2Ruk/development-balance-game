import { Module } from '@nestjs/common';
import { AnswerService } from './answer.service';
import { AnswerController } from './answer.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnswerEntity } from '@src/balance/answer/entities/answer.entity';
import { AnswerRepository } from '@src/balance/answer/answer.repository';

@Module({
  imports: [TypeOrmModule.forFeature([AnswerEntity])],
  controllers: [AnswerController],
  providers: [AnswerService, AnswerRepository],
})
export class AnswerModule {}
