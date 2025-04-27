import {
    IsDate,
    IsEmail,
    IsNotEmpty,
    IsOptional,
    Length,
    MaxDate,
    Min
} from "class-validator";
import {$Enums, Prisma} from "../../../generated/prisma";

import {Type} from "class-transformer";
import LeaveCreateNestedManyWithoutUserInput = Prisma.LeaveCreateNestedManyWithoutUserInput;

const now = new Date();

const minAge = new Date(now.getFullYear() - 18, now.getMonth(), now.getDate());



export class CreateEmployeeDto {



    @IsNotEmpty()
    name: string;

    @IsOptional()
    isAdmin?: boolean;

    @IsOptional()
    isActive?: boolean;

    password: string;

    empId: string
    @IsEmail()
    email: string
    @Length(11,13,{message:"Invalid phone number"})
    contactNo: string
    gender: $Enums.Gender
    @Length(10,100, {message: "Length of the address cannot be less than 10 letters"})
    address: string
    @IsNotEmpty({message:"Enter employee job title"})
    jobTitle: string
    @IsDate()
    @Type(() => Date)
    @MaxDate(now, {message: 'Date cannot be in the future',})
    joiningDate: Date | string
    department: $Enums.Department


    @Type(() => Date)
    @IsDate()
    @MaxDate(minAge,{message:"Minimum age for employee is 18 years"})
    dob: Date | string
    employeType: $Enums.EmpType
    @IsOptional()
    profilePicture?: string | null
    salary: number
    bankName: string
    @Length(10, 16, { message: 'Invalid account number ' })
    bankNo: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Leave?: LeaveCreateNestedManyWithoutUserInput

}

