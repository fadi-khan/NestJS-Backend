import {Injectable, NotFoundException} from '@nestjs/common';
import {CreateLocalLeaveDto} from './dto/create-local-leave.dto';
import {UpdateLocalLeaveDto} from './dto/update-local-leave.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {LocalLeave} from "./entities/local-leave.entity";

@Injectable()
export class LocalLeaveService {


  constructor(@InjectRepository(LocalLeave) private localRepository:Repository<LocalLeave>) {
  }

  async create(createLocalLeaveDto: CreateLocalLeaveDto) {
    return await this.localRepository.save(createLocalLeaveDto);
  }

  async findAll() {
    const localLeaves = await this.localRepository.find();

    if (localLeaves.length<1){
      throw new NotFoundException("No leave exist ")
    }

    return localLeaves;
  }

  async findOne(id: number) {
    return await this.localRepository.findOne({where:{id:id}});
  }

  async update(id: number, updateLocalLeaveDto: UpdateLocalLeaveDto) {


    return await this.localRepository.update(id, updateLocalLeaveDto);
  }

 async remove(id: number) {
    return await this.localRepository.delete(id);
  }
}
