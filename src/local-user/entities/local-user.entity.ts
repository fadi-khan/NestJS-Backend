import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {$Enums} from "../../../generated/prisma";
import {LocalLeave} from "../../local-leave/entities/local-leave.entity";


@Entity('user')
export class LocalUser {



    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name: string;

    @Column({unique:true })
    email: string;

    @Column()
    password: string;

    @Column({default:true} )
    isActive: boolean = true;

    @Column({default:false})
    isAdmin:boolean = false;

    @Column()
    contactNo:number;

    @Column()
    empId:number;

    @Column({type:'enum', enum: $Enums.Gender})
    gender:$Enums.Gender;

    @Column()
    address:string;

    @Column()
    jobTitle:string;

    @Column({type:'date',default: ()=>'CURRENT_DATE'})
    joiningDate:Date

    @Column({type:'enum' , enum:$Enums.Department })
    department:$Enums.Department;

    @Column()
    dob : Date;

    @Column({type:'enum' , enum:$Enums.EmpType})
    employeeType :$Enums.EmpType

    @Column({nullable:true})
    profilePicture?:string;

    @Column()
    salary:number;


    @Column()
    bankName : string;

    @Column()
    bankNo:string;

    @Column( { type:"date", default:()=>'CURRENT_DATE'})
    createdAt:Date;

    @Column({
        type:'date',
        default:()=>'CURRENT_DATE' ,
        onUpdate:'CURRENT_DATE'
    })
    updatedAt:Date;

    @OneToMany( ()=>LocalLeave,(localLeave)=>localLeave.user)
    leaves:LocalLeave[];

}
