import { Controller, Get } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { delay, of } from 'rxjs';

@Controller()
export class AppController {
  @MessagePattern('ping')
  ping() {
    return of('pong service B').pipe(delay(500));
  }

  @Get()
  getHello(): string {
    return 'Hello service B';
  }
}
