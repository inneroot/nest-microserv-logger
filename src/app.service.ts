import { Injectable, Logger } from '@nestjs/common';


@Injectable()
export class AppService {
  private logger = new Logger('Logger')
  
  logEvent(logData) {
    this.logger.log(logData)
  }
}
