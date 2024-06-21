import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {Users} from './users.entity'
import { UpsertType } from 'typeorm/driver/types/UpsertType';
import {CreateUserDto} from './dto/create-users.dto'
import { CreateRecipeDto } from 'src/recipes/dto/create-recipes.dto';
import { CreateFamilyMembersDto } from 'src/users/dto/create-family.dto';
import { FamilyMembers} from 'src/users/familyMembers/familyMembers.entity';

@Injectable()
export class UsersService {

    constructor(@InjectRepository(Users) private usersRepository: Repository<Users>){}

    async createUser(user: CreateUserDto){
        const exists= await this.usersRepository.findOne({
            where:{
                id: user.id
            }    
        })

        if(exists){
            return new HttpException('Este usuario ya existe', 400)
        }



        const newUser = this.usersRepository.create(user)
        return this.usersRepository.save(newUser)
    }
    getUsers(){
        return this.usersRepository.find()
    }
    getUser(id: number){
        return this.usersRepository.findOne({
            where:{
                id
            }    
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

    // createFamily(id:number, famili: CreateFamilyDto)

}
