import {Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe} from '@nestjs/common';
import { LocalLeaveService } from './local-leave.service';
import { CreateLocalLeaveDto } from './dto/create-local-leave.dto';
import { UpdateLocalLeaveDto } from './dto/update-local-leave.dto';

@Controller('local-leave')
export class LocalLeaveController {
  constructor(private readonly localLeaveService: LocalLeaveService) {}

  @Post()
  create(@Body() createLocalLeaveDto: CreateLocalLeaveDto) {
    return this.localLeaveService.create(createLocalLeaveDto);
  }

  @Get()
  findAll() {
    return this.localLeaveService.findAll();
  }

  @Get(':id')
  findOne(@Param('id' , ParseIntPipe) id: number) {
    return this.localLeaveService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id' , ParseIntPipe) id: number, @Body() updateLocalLeaveDto: UpdateLocalLeaveDto) {
    return this.localLeaveService.update(id, updateLocalLeaveDto);
  }

  @Delete(':id')
  remove(@Param('id' , ParseIntPipe) id: number) {
    return this.localLeaveService.remove(id);
  }
}
