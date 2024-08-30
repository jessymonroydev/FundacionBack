import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Count } from './schema/count.schema';

@Injectable()
export class CountService {
  constructor(@InjectModel('Count') private readonly countModel: Model<Count>) {}

  async incrementCount(route: string): Promise<void> {
    await this.countModel.findOneAndUpdate(
      { route },
      { $inc: { count: 1 } },
      { upsert: true }
    ).exec();
  }

  async getCount(route: string): Promise<number> {
    const countDoc = await this.countModel.findOne({ route }).exec();
    return countDoc ? countDoc.count : 0;
  }
}