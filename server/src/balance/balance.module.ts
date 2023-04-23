import { Module } from '@nestjs/common';
import { QuestionModule } from '@src/balance/question/question.module';
import { AnswerModule } from '@src/balance/answer/answer.module';

@Module({
  imports: [QuestionModule, AnswerModule],
  exports: [AnswerModule, QuestionModule],
  controllers: [],
})
export class BalanceModule {}
