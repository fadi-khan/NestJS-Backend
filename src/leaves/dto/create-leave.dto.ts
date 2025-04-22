import {$Enums, Prisma} from "../../../generated/prisma";
import UserCreateNestedOneWithoutLeaveInput = Prisma.UserCreateNestedOneWithoutLeaveInput;
import {IsDate, IsNotEmpty, IsOptional, MinDate} from "class-validator";
import {Type} from "class-transformer";

export class CreateLeaveDto {


    @IsDate()

    @MinDate(new Date(),{ message:"Starting date cannot be in past"} )
    @Type(() => Date)
    startDate: Date | string
    @IsDate()
    endDate: Date | string
    @IsNotEmpty()
    reason: string
    @IsOptional()
    status: $Enums.Status
    user: UserCreateNestedOneWithoutLeaveInput


}
