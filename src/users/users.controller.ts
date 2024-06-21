import { Controller, Post, Body, Get, Param, ParseIntPipe, Delete } from '@nestjs/common';
import { CreateUserDto } from './dto/create-users.dto';
import { UsersService } from './users.service';
import { Users } from './users.entity';
import { JoinColumn, OneToOne } from 'typeorm';
// import { Recipes } from 'src/recipes/recipes.entity';
import { FamilyMembers } from 'src/users/familyMembers/familyMembers.entity';

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
    createUser(@Body() newUser:CreateUserDto){
        return this.usersService.createUser(newUser)
    }
    @Delete(':id')
    deleteUser(@Param('id', ParseIntPipe) id: number){
        return this.usersService.deleteUser(id)
    }
//no es one to One. un usuario tiene varios miembros mamiliares, pero los miembros familiares solo un usuario
    // @OneToOne(()=> Family)
    // @JoinColumn()
    // family:Family 
}
