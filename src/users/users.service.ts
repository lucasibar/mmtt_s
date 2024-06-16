import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {Users} from './users.entity'
import { UpsertType } from 'typeorm/driver/types/UpsertType';
import {CreateUserDto} from './dto/create-users.dto'

@Injectable()
export class UsersService {

    constructor(@InjectRepository(Users) private usersRepository: Repository<Users>){}

    createUser(user: CreateUserDto){
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
}
