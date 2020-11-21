import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { Transport } from '@nestjs/microservices';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const options = new DocumentBuilder()
    .setTitle('Boilerplate Nest.js')
    .setDescription('Boilerplate for news projects ')
    .setVersion('1.0')
    .addServer('http://localhost:3000/')
    .addBasicAuth()
    .build();
  const document = SwaggerModule.createDocument(app, options, {
    include: [ 
      AppModule, 
      ]
  });
  SwaggerModule.setup('swagger', app, document);
  await app.listen(3000);
  console.log('Application is running...');
}
bootstrap();