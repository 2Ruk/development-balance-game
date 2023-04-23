import { PartialType, PickType } from '@nestjs/mapped-types';
import { AnswerEntity } from '@src/balance/answer/entities/answer.entity';

export class CreateAnswerDto extends PickType(AnswerEntity, [
  'tba_answer',
  'tbq_id',
] as const) {}
