import { Injectable } from '@nestjs/common';
import { CreateLocalUserDto } from './dto/create-local-user.dto';
import { UpdateLocalUserDto } from './dto/update-local-user.dto';

@Injectable()
export class LocalUserService {
  create(createLocalUserDto: CreateLocalUserDto) {
    return 'This action adds a new localUser';
  }

  findAll() {
    return `This action returns all localUser`;
  }

  findOne(id: number) {
    return `This action returns a #${id} localUser`;
  }

  update(id: number, updateLocalUserDto: UpdateLocalUserDto) {
    return `This action updates a #${id} localUser`;
  }

  remove(id: number) {
    return `This action removes a #${id} localUser`;
  }
}
