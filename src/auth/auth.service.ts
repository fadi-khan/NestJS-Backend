import {Injectable, UnauthorizedException} from '@nestjs/common';
import {AuthPayloadDto} from "./dto/auth.dto";
import {JwtService} from "@nestjs/jwt";
import {EmployeeService} from "../employee/employee.service";

@Injectable()
export class AuthService {

    constructor(private jwtService :JwtService , private db: EmployeeService) {
    }
    async validateUser({email,password}:AuthPayloadDto){
        try {
            const user = await this.db.findUserByEmail(email);




            const isPasswordValid = password === user.password;


            if (!isPasswordValid) {
                throw new UnauthorizedException('Invalid credentials');
            }

            const { password: _, ...userData } = user;
            return this.jwtService.sign(userData)


        } catch (error) {
            throw new UnauthorizedException("Username or Password is incorrect ");
        }
    }
}
