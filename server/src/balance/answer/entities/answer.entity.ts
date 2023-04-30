import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { QuestionEntity } from '@src/balance/question/entities/question.entity';

@Entity('t_balance_answer')
@Index(['tba_user_id', 'tbq_id'], { unique: true })
export class AnswerEntity {
  @PrimaryGeneratedColumn()
  tba_id: number;

  @ManyToOne(() => QuestionEntity)
  @JoinColumn({ name: 'id' })
  tbq_id: number;

  @Column({ type: 'uuid', nullable: false })
  tba_user_id: string;

  @Column({ type: 'int', nullable: false })
  tba_answer: number;

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  created_at: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  updated_at: Date;
}
