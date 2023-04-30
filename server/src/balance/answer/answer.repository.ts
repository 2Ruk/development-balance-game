import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AnswerEntity } from '@src/balance/answer/entities/answer.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AnswerRepository {
  constructor(
    @InjectRepository(AnswerEntity)
    private readonly answerRepository: Repository<AnswerEntity>,
  ) {}

  async findAll(user_id: string) {
    return await this.answerRepository
      .createQueryBuilder('answer')
      .leftJoinAndMapOne('answer.question', 'answer.tbq_id', 'question')
      .where('answer.tba_user_id = :user_id', { user_id })
      .getMany();
  }
  async createAnswer(answer: Partial<AnswerEntity>) {
    try {
      await this.answerRepository.save(answer);
    } catch (e) {
      console.log(e);
    }

    return await this.groupByQuestionId(answer.tbq_id);
  }

  async findOneWithQuestionId(id: number, user_id: string) {
    return await this.answerRepository
      .createQueryBuilder('answer')
      .leftJoinAndSelect('answer.question', 'question')
      .where('answer.tba_id = :id', { id })
      .andWhere('answer.tba_user_id = :user_id', { user_id })
      .getOne();
  }

  async groupByQuestionId(tbq_id: number) {
    const items = await this.answerRepository
      .createQueryBuilder('answer')
      .select('answer.tba_answer', 'tba_answer')
      .addSelect('COUNT(answer.tba_answer)', 'count')
      .where('answer.tbq_id = :tbq_id', { tbq_id })
      .groupBy('answer.tba_answer')
      .getRawMany();

    const total = items.reduce((sum, { count }) => sum + Number(count), 0);
    const percent1 = total
      ? Math.round(
          (Number(items.find(({ tba_answer }) => tba_answer === 1)?.count) /
            total) *
            100,
        )
      : 0;

    const tba_answer_1 = isNaN(percent1) ? 0 : percent1;
    const tba_answer_2 = 100 - tba_answer_1;
    return {
      tbq_id,
      tba_answer_1,
      tba_answer_2,
    };
  }
}
