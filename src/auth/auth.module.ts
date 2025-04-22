import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import {DatabaseModule} from "../database/database.module";
import {EmployeeModule} from "../employee/employee.module";
import {JwtModule} from "@nestjs/jwt";
import {PassportModule} from "@nestjs/passport";
import {LocalStrategy} from "./strategies/local.strategy";
import {JwtStrategy} from "./strategies/jwt.strategy";

@Module({

  imports: [
      JwtModule.register({
        secret:'fahad976',
        signOptions:{expiresIn:'1d'}
      }),

    PassportModule,
    DatabaseModule ,
    EmployeeModule
  ],
  controllers: [AuthController],
  providers: [AuthService , LocalStrategy , JwtStrategy],

})
export class AuthModule {}
