import {PassportStrategy} from "@nestjs/passport";
import {Strategy} from "passport-local";
import {AuthService} from "../auth.service";
import {Injectable, UnauthorizedException} from "@nestjs/common";

@Injectable()
export  class LocalStrategy extends  PassportStrategy(Strategy){

    constructor(private authService:AuthService) {
        super( {usernameField : 'email'});
    }

      validate(email:string,password:string ) {
        const promise = this.authService.validateUser({email,password});
        if (!promise){
            throw new UnauthorizedException("Invalid email or password");
        }
        return promise
    }

}