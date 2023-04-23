import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { QuestionEntity } from '@src/balance/question/entities/question.entity';
import { Repository } from 'typeorm';

@Injectable()
export class QuestionRepository {
  constructor(
    @InjectRepository(QuestionEntity)
    private readonly questionRepository: Repository<QuestionEntity>,
  ) {}

  async createQuestion(
    question: Partial<QuestionEntity>,
  ): Promise<QuestionEntity> {
    return await this.questionRepository.save(question);
  }

  async getQuestionById(id: number): Promise<QuestionEntity> {
    return await this.questionRepository.findOne({
      where: {
        id: id,
      },
    });
  }
}
