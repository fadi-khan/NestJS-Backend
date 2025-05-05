import {IsDate, IsDateString, IsInt, IsNotEmpty, IsOptional, MinDate} from "class-validator";
import {$Enums} from "../../../generated/prisma";

export class CreateLocalLeaveDto {


    @IsDate()

    @MinDate(new Date(),{ message:"Starting date cannot be in past"} )
    @IsDateString()
    startDate: string

    @IsDateString()
    endDate: string

    @IsNotEmpty()
    reason: string

    @IsOptional()
    status: $Enums.Status

    @IsInt()
    userId:number;

}
