import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { dayFormat } from './util/dayjs.util';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/day-format')
  getDayFormatFromUtil() {
    // test
    // test
    return dayFormat();
  }
}
