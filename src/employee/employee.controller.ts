import {Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe, ParseIntPipe} from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';

@Controller('employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Post()
  create(@Body(ValidationPipe) createEmployeeDto: CreateEmployeeDto) {
    return this.employeeService.create(createEmployeeDto);
  }

  @Get()
  findAll() {
    return this.employeeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id',ParseIntPipe) id:number) {
    return this.employeeService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id',ParseIntPipe) id: number, @Body(ValidationPipe) updateEmployeeDto: UpdateEmployeeDto) {
    return this.employeeService.update(id, updateEmployeeDto);
  }

  @Delete(':id')
  remove(@Param('id',ParseIntPipe) id: number) {
    return this.employeeService.remove(id);
  }
  @Get(':id/leaves')
  findEmployeeLeaves(@Param('id',ParseIntPipe) id:number) {
    return this.employeeService.findEmployeeLeaves(id);
  }

  @Post('authentication/employee')
  autheticateEmployee( @Body() body:{email:string,password:string}  ) {
    const{email,password}=body;

    return  this.employeeService.findUserByEmail(email);
  }

}
