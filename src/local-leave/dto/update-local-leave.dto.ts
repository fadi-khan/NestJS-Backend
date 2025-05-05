import { PartialType } from '@nestjs/mapped-types';
import { CreateLocalLeaveDto } from './create-local-leave.dto';

export class UpdateLocalLeaveDto extends PartialType(CreateLocalLeaveDto) {}
