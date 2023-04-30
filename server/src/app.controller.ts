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

  @Get('/health')
  getHealth() {
    return 'ok';
  }
  @Get(':test')
  async findOne(@Param('test') id: string, @Res() res: Response) {
    const value = await this.cacheManager.get(id);
    res.status(200).send('ok');
  }
}
