import { Controller, Post, Body } from '@nestjs/common';
import { CreateUserDto } from './dto/create-users.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService){}

    @Post()
    createUser(@Body() newUser:CreateUserDto){
        return this.usersService.createUser(newUser)
    }
}
