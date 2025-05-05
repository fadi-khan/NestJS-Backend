import { Test, TestingModule } from '@nestjs/testing';
import { LocalLeaveService } from './local-leave.service';

describe('LocalLeaveService', () => {
  let service: LocalLeaveService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LocalLeaveService],
    }).compile();

    service = module.get<LocalLeaveService>(LocalLeaveService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
