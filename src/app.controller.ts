import { Controller } from '@nestjs/common';
import { Ctx, EventPattern, NatsContext, Payload } from '@nestjs/microservices'
import { AppService } from './app.service';

@Controller()
export class AppController {  
  constructor(private readonly appService: AppService) {}

  @EventPattern('log')
  async getHello(@Payload() data: any, @Ctx() context: NatsContext) {
    this.appService.logEvent({ data, ...context})
  }
}
