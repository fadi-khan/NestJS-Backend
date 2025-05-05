import { Test, TestingModule } from '@nestjs/testing';
import { LocalUserController } from './local-user.controller';

describe('LocalUserController', () => {
  let controller: LocalUserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LocalUserController],
    }).compile();

    controller = module.get<LocalUserController>(LocalUserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
