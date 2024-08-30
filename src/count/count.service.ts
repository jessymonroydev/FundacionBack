import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Count } from './schema/count.schema';

@Injectable()
export class CountService {
  constructor(@InjectModel('Count') private readonly countModel: Model<Count>) {}

  async incrementCount(route: string): Promise<Count> {
    return this.countModel.findOneAndUpdate(
      { route },
      { $inc: { count: 1 } },
      { new: true, upsert: true }
    ).exec();
  }
}
