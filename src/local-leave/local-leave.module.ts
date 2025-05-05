import { Module } from '@nestjs/common';
import { LocalLeaveService } from './local-leave.service';
import { LocalLeaveController } from './local-leave.controller';
import {CreateEmployeeDto} from "../employee/dto/create-employee.dto";
import {UpdateEmployeeDto} from "../employee/dto/update-employee.dto";
import {CreateLeaveDto} from "../leaves/dto/create-leave.dto";
import {UpdateLeaveDto} from "../leaves/dto/update-leave.dto";
import {TypeOrmModule} from "@nestjs/typeorm";
import {LocalLeave} from "./entities/local-leave.entity";

@Module({
  imports: [CreateLeaveDto,UpdateLeaveDto ,TypeOrmModule.forFeature([LocalLeave])],
  controllers: [LocalLeaveController],
  providers: [LocalLeaveService],
})
export class LocalLeaveModule {}
