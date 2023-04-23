import { Module } from '@nestjs/common';
import { QuestionService } from './question.service';
import { QuestionController } from './question.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuestionEntity } from '@src/balance/question/entities/question.entity';
import { QuestionRepository } from '@src/balance/question/question.repository';

@Module({
  imports: [TypeOrmModule.forFeature([QuestionEntity])],
  controllers: [QuestionController],
  providers: [QuestionService, QuestionRepository],
})
export class QuestionModule {}
