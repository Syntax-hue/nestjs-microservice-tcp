import { Controller, Logger } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { MathService } from './math/math.service';

@Controller()
export class AppController {

  private logger = new Logger('AppController');

  constructor(private readonly mathService: MathService) {}

  @MessagePattern('add')
  async acumulate(data: number[]): Promise<number> { 
    this.logger.log('Adding' + data.toString());

    return this.mathService.accumulate(data);
  }
}
