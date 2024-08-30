import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CountService } from './count.service';
import { CountController } from './count.controller';
import { CountSchema } from './schema/count.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Count', schema: CountSchema }])],
  controllers: [CountController],
  providers: [CountService],
})
export class CountModule {}
