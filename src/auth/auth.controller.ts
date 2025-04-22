import {BadRequestException, Body, Controller, Get, Post, Req, UseGuards} from '@nestjs/common';
import {AuthPayloadDto} from "./dto/auth.dto";
import {AuthService} from "./auth.service";
import {AuthGuard} from "@nestjs/passport";
import {Request} from "express";

@Controller('auth')
export class AuthController {


constructor(private authService: AuthService){}

    @UseGuards(AuthGuard('local'))
    @Post('login')
    login(@Req() req:Request){

        return req.user;
    }

    @UseGuards(AuthGuard('jwt'))
    @Get('status')
    status(@Req() req :Request){

    console.log(req.user);
    return req.user;

    }


}
