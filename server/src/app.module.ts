import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuestionModule } from './balance/question/question.module';
import { AnswerModule } from './balance/answer/answer.module';
import { BalanceModule } from './balance/balance.module';
import { ShareLibraryModule } from '@app/share-library';

@Module({
  imports: [QuestionModule, AnswerModule, BalanceModule, ShareLibraryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
