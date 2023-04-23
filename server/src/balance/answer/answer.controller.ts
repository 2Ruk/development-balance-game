import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
} from '@nestjs/common';
import { AnswerService } from './answer.service';
import { CreateAnswerDto } from './dto/create-answer.dto';
import { UpdateAnswerDto } from './dto/update-answer.dto';
import { Request } from 'express';
import { ConfigService } from '@nestjs/config';

@Controller('/balance/answer')
export class AnswerController {
  constructor(
    private readonly answerService: AnswerService,
    private readonly configService: ConfigService,
  ) {}

  @Post()
  create(@Req() req: Request, @Body() createAnswerDto: CreateAnswerDto) {
    const ckName = this.configService.get<string>('QUESTION_COOKIE_NAME');
    const ckValue = req.cookies[ckName];
    return this.answerService.create(createAnswerDto, ckValue);
  }

  @Get(':id')
  findByQuestionId(@Param('id') id: string) {
    return this.answerService.findByQuestionId(Number(id));
  }
}
