import { Injectable } from '@nestjs/common';
import { CreateQuestionDto } from './dto/create-question.dto';
import { QuestionRepository } from '@src/balance/question/question.repository';
import { Response } from 'express';
import { ConfigService } from '@nestjs/config';
import { v4 } from 'uuid';

@Injectable()
export class QuestionService {
  constructor(
    private readonly questionRepository: QuestionRepository,
    private readonly configService: ConfigService,
  ) {}

  // TODO: Layer 분리
  cookieInsert(res: Response) {
    const uuidV4Key = v4();
    res.cookie(
      this.configService.get<string>('QUESTION_COOKIE_NAME'),
      uuidV4Key,
      {
        maxAge: 1000 * 60 * 60 * 24 * 365,
        httpOnly: true,
      },
    );
  }
  async create(item: any) {
    for (let it of item) {
      await this.questionRepository.createQuestion({
        questionA: it.questionA,
        questionB: it.questionB,
      });
    }
  }

  async getQuestionById(id: number) {
    return await this.questionRepository.getQuestionById(id);
  }
}
