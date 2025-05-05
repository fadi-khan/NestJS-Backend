import { Test, TestingModule } from '@nestjs/testing';
import { LocalLeaveController } from './local-leave.controller';
import { LocalLeaveService } from './local-leave.service';

describe('LocalLeaveController', () => {
  let controller: LocalLeaveController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LocalLeaveController],
      providers: [LocalLeaveService],
    }).compile();

    controller = module.get<LocalLeaveController>(LocalLeaveController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
