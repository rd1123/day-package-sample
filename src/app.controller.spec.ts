import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { dayFormat } from './util/dayjs.util';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
  
  describe('day-format', () => {
    const dayFormatValue = dayFormat();
    it(`should return ${dayFormatValue}`, () => {
      expect(appController.getDayFormatFromUtil()).toBe(dayFormatValue);
    });
  });
});
