import { Injectable } from '@nestjs/common';
import { CreateAnswerDto } from './dto/create-answer.dto';
import { AnswerRepository } from '@src/balance/answer/answer.repository';

@Injectable()
export class AnswerService {
  constructor(private readonly answerRepository: AnswerRepository) {}
  async findAllMapTbqId(ckValue: string) {
    const list = await this.answerRepository.findAll(ckValue);
    return list.map(({ question }) => question?.id);
  }
  async create({ tba_answer, tbq_id }: CreateAnswerDto, ckValue: string) {
    return await this.answerRepository.createAnswer({
      tba_answer,
      tbq_id,
      tba_user_id: ckValue,
    });
  }

  findByQuestionId(tbq_id: number) {
    return this.answerRepository.groupByQuestionId(tbq_id);
  }
}
