import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { EmployeeModule } from './employee/employee.module';
import { LeavesModule } from './leaves/leaves.module';
import { AuthModule } from './auth/auth.module';
import { LocalUserModule } from './local-user/local-user.module';
import { LocalLeaveModule } from './local-leave/local-leave.module';
import {TypeOrmModule} from "@nestjs/typeorm";
import {LocalUser} from "./local-user/entities/local-user.entity";
import {LocalLeave} from "./local-leave/entities/local-leave.entity";

@Module({
  imports: [DatabaseModule, EmployeeModule, LeavesModule, AuthModule, LocalUserModule, LocalLeaveModule ,
    TypeOrmModule.forRoot(
        {
          type:'postgres',
          host:'localhost',
          port:5432,
          username:'postgres',
          password:'password',
          entities:[LocalUser,LocalLeave],
          synchronize:true,
          database:'hrmDb',
          logging: true

        }),
    TypeOrmModule.forFeature([LocalUser,LocalLeave])

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
