import { Controller, Post, Body, Get, Param, ParseIntPipe } from '@nestjs/common';
import { CreateUserDto } from './dto/create-users.dto';
import { UsersService } from './users.service';
import { Users } from './users.entity';

@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService){}


    @Get()
    getUsers():Promise<Users[]>{
        return this.usersService.getUsers()
    }

    @Get(':id')
    getUser(@Param('id', ParseIntPipe) id : number):Promise<Users>{
        return this.usersService.getUser(id)
    }

    @Post()
    createUser(@Body() newUser:CreateUserDto):Promise<Users >{
        return this.usersService.createUser(newUser)
    }
}
