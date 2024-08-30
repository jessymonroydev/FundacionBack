import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: 'https://fundacionvolveranacerkids.org', // Permitir solo este dominio
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS'
  });

  const port = process.env.PORT || 3000;
  await app.listen(port);
}
bootstrap();