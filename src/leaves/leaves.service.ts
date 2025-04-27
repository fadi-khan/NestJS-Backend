import { Injectable } from '@nestjs/common';
import { CreateLeaveDto } from './dto/create-leave.dto';
import { UpdateLeaveDto } from './dto/update-leave.dto';
import {DatabaseService} from "../database/database.service";

@Injectable()
export class LeavesService {

  constructor(private readonly dbService: DatabaseService) {
  }

  create(createLeaveDto: CreateLeaveDto) {
    return this.dbService.leave.create({data:createLeaveDto});
  }

  findAll() {
    return this.dbService.leave.findMany({include:{user:true}} );
  }

  findOne(id: number) {
    return this.dbService.leave.findUnique({where:{id:id}});
  }

  update(id: number, updateLeaveDto: UpdateLeaveDto) {
    return this.dbService.leave.update({ data:updateLeaveDto, where:{id:id}});
  }

  remove(id: number) {
    return this.dbService.leave.delete({where:{id:id}});
  }
}
