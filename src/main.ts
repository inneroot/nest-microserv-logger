import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { Logger } from '@nestjs/common';

const logger = new Logger('Monitoring service')

const microserviceOptions: MicroserviceOptions = {
  transport: Transport.NATS,
  options: {
    url: 'nats://localhost:4222',
  },
}

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, microserviceOptions);
  app.listen(() => logger.log('Microservice is listening...'));
}

bootstrap();
