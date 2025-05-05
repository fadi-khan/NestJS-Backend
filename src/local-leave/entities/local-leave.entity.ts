import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {$Enums} from "../../../generated/prisma";
import {LocalUser} from "../../local-user/entities/local-user.entity";


@Entity('leave')
export class LocalLeave {

    @PrimaryGeneratedColumn()
    id:number;

    @Column({ type: 'date' })
    startDate: Date;

    @Column({ type: 'date' })
    endDate: Date;

    @Column()
    reason: string;

    @Column()
    userId: number;

    @ManyToOne(()=>LocalUser, (localUser)=>localUser.leaves)
    user:LocalUser;

    @Column({ type: 'enum', enum: $Enums.Status, default: $Enums.Status.PENDING })
    status: $Enums.Status;

}
