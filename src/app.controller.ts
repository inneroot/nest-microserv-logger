import { Controller, Logger } from '@nestjs/common';
import { AppService } from './app.service';
import { Ctx, MessagePattern, NatsContext, Payload } from '@nestjs/microservices'

@Controller()
export class AppController {
  private logger = new Logger('MicroService')
  constructor(private readonly appService: AppService) {}

  @MessagePattern('*')
  async getHello(@Payload() data: any, @Ctx() context: NatsContext) {
    this.logger.log({...data, ...context})
  }
}
