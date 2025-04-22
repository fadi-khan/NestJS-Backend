import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LeavesService } from './leaves.service';
import { CreateLeaveDto } from './dto/create-leave.dto';
import { UpdateLeaveDto } from './dto/update-leave.dto';

@Controller('leaves')
export class LeavesController {
  constructor(private readonly leavesService: LeavesService) {}

  @Post()
  create(@Body() createLeafDto: CreateLeaveDto) {
    return this.leavesService.create(createLeafDto);
  }

  @Get()
  findAll() {
    return this.leavesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.leavesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLeafDto: UpdateLeaveDto) {
    return this.leavesService.update(+id, updateLeafDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.leavesService.remove(+id);
  }
}
