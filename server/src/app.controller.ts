import {
  Controller,
  Get,
  Inject,
  Param,
  Res,
  UseInterceptors,
} from '@nestjs/common';
import { AppService } from './app.service';
import { CACHE_MANAGER, CacheInterceptor } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';
import { Response } from 'express';

@Controller()
@UseInterceptors(CacheInterceptor)
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}

  @Get(':test')
  async findOne(@Param('test') id: string, @Res() res: Response) {
    const value = await this.cacheManager.get(id);
    if (value) {
      return res.status(200).send(value);
    } else {
      await this.cacheManager.set(id, id);
    }
    res.status(200).send('ok');
  }
}
