import { Controller, Get, Query } from '@nestjs/common';
import { CountService } from './count.service';

@Controller('count')
export class CountController {
  constructor(private readonly countService: CountService) {}

  @Get()
  async incrementCount(@Query('route') route: string) {
    const updatedCount = await this.countService.incrementCount(route);
    return { count: updatedCount.count };
  }
}

