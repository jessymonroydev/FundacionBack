import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: 'true', // Permitir solo este dominio
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true, // Si necesitas enviar cookies o encabezados de autorización
  });

  const port = process.env.PORT || 3000;
  await app.listen(port);
}
bootstrap();