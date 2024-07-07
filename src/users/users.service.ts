import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {Users} from './users.entity'
import {CreateUserDto} from './dto/create-users.dto'
import { CreateRecipeDto } from 'src/recipes/dto/create-recipes.dto';

@Injectable()
export class UsersService {

    constructor(@InjectRepository(Users) private usersRepository: Repository<Users>){}

    async createUser(user: CreateUserDto){
        const exists= await this.usersRepository.findOne({
            where:{
                mail: user.mail
            }    
        })

        if(exists){
            return new HttpException('Este mail ya esta registrado', 400)
        }



        const newUser = this.usersRepository.create(user)
        return this.usersRepository.save(newUser)
    }
    getUsers(){
        return this.usersRepository.find({ relations: ['daymeals'] })
    }
    getUser(id: number){
        return this.usersRepository.findOne({
            where:{
                id
            },
            relations: ['daymeals', 'recipes']
        })
    }
    deleteUser(id: number){
        return this.usersRepository.delete({id})
    }

    async createRecipe(id: number, recipe: CreateRecipeDto){
        const existRecipe= await this.usersRepository.findOne({
            where:{
                id
            }}
        )
        if(!existRecipe){
            return new HttpException('Usuario no encontrado', HttpStatus.NOT_FOUND)
        }
        return "s"
    }

    
}
