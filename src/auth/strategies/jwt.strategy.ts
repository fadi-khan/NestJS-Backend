import {PassportStrategy} from "@nestjs/passport";
import {ExtractJwt, Strategy} from 'passport-jwt'

export class JwtStrategy extends PassportStrategy(Strategy){

    constructor() {
        super(
            {
                jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
                ignoreExpiration: false,
                secretOrKey:'fahad976'

            }

        );
    }

    validate(payload:any) {
        return payload;
    }

}