import { Test, TestingModule } from '@nestjs/testing';
import { LocalUserService } from './local-user.service';

describe('LocalUserService', () => {
  let service: LocalUserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LocalUserService],
    }).compile();

    service = module.get<LocalUserService>(LocalUserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
