import { Module } from '@nestjs/common';
import { LocalUserService } from './local-user.service';
import { LocalUserController } from './local-user.controller';

@Module({
  controllers: [LocalUserController],
  providers: [LocalUserService],
})
export class LocalUserModule {}
