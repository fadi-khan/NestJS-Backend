import {Injectable, NotFoundException, UnauthorizedException} from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import {DatabaseService} from "../database/database.service";

@Injectable()
export class EmployeeService {


  constructor(private readonly dbService: DatabaseService) {
  }
 async create(createEmployeeDto: CreateEmployeeDto) {
    return this.dbService.user.create({data: createEmployeeDto,})
  }

 async findAll() {

    const res =await this.dbService.user.findMany()


    if (res.length <1) {
      throw new NotFoundException("no users found")
    }
    return res ;
  }

 async findOne(id: number) {

    const user = await this.dbService.user.findFirst({where: {id: id}})

     if (!user) {
       throw new NotFoundException("User not found");
     }
     return user;

  }

 async update(id: number, updateEmployeeDto: UpdateEmployeeDto) {
    const user =await this.dbService.user.update({data:updateEmployeeDto , where: {id: id}})

    if (!user){
      throw new NotFoundException('User not found')
    }

    return user;
  }

 async remove(id: number) {
    return this.dbService.user.delete({where: {id: id}});
  }

 async findUserByEmail(email: string  ) {

     const user =await this.dbService.user.findFirst({ where: { email } });

     if (!user) {
         throw new NotFoundException("User not found");
     }
     return user;

  }

 async findEmployeeLeaves(id: number) {
    return this.dbService.user.findUnique({
      where:{id:id},
      include:{Leave:true}

    })
  }
}
