import { Module } from '@nestjs/common';
import { LeavesService } from './leaves.service';
import { LeavesController } from './leaves.controller';
import {DatabaseModule} from "../database/database.module";

@Module({
  controllers: [LeavesController],
  providers: [LeavesService],
  imports:[DatabaseModule]
})
export class LeavesModule {}
