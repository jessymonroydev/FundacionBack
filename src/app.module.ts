import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CountModule } from './count/count.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(), CountModule, MongooseModule.forRoot(process.env.MONGODB_CONNECT, {dbName: 'fundacion'})],
  controllers: [],
  providers: [],
})
export class AppModule {}
