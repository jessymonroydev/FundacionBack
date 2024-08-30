import { Controller, Get, Post, Query } from '@nestjs/common';
import { CountService } from './count.service';

@Controller('count')
export class CountController {
  constructor(private readonly countService: CountService) {}

  @Post('increment')
  async incrementCount(@Query('route') route: string) {
    await this.countService.incrementCount(route);
    return { message: 'Count incremented' };
  }

  @Get()
  async getCount(@Query('route') route: string) {
    const count = await this.countService.getCount(route);
    return { count };
  }
}

