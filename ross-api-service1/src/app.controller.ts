import { Controller, Get } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Controller()
export class AppController {
  @Get()
  getHello(): string {
    return 'Hello service A';
  }

  @MessagePattern({ cmd: 'ping' })
  ping() {
    return of('pong service A').pipe(delay(100));
  }
}
