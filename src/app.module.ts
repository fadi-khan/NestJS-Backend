import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { EmployeeModule } from './employee/employee.module';
import { LeavesModule } from './leaves/leaves.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [DatabaseModule, EmployeeModule, LeavesModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
