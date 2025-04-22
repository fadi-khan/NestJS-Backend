import { Module } from '@nestjs/common';
import { DatabaseService } from './database.service';
import {PrismaClient} from "../../generated/prisma";

@Module({
  providers: [DatabaseService],
  exports: [DatabaseService],
})
export class DatabaseModule {}
