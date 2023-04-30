import { Controller, Get, Post, Param, Res, Req } from '@nestjs/common';
import { QuestionService } from './question.service';
import { Request, Response } from 'express';
import { ConfigService } from '@nestjs/config';

@Controller('/balance/question')
export class QuestionController {
  constructor(
    private readonly questionService: QuestionService,
    private readonly configService: ConfigService,
  ) {}

  @Get(':id')
  findOne(
    @Param('id') id: string,
    @Req() req: Request,
    @Res({ passthrough: true }) res: Response,
  ) {
    const ckName = this.configService.get<string>('QUESTION_COOKIE_NAME');
    if (!req.cookies[ckName]) {
      this.questionService.cookieInsert(res);
    } else {
      console.log(req.cookies[ckName]);
    }

    return this.questionService.getQuestionById(Number(id));
  }
}
