import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {Users} from './users.entity'
import { UpsertType } from 'typeorm/driver/types/UpsertType';
import {CreateUserDto} from './dto/create-users.dto'

@Injectable()
export class UsersService {

    constructor(@InjectRepository(Users) private userRepository: Repository<Users>){}

    createUser(user: CreateUserDto){
        const newUser = this.userRepository.create(user)
        return this.userRepository.save(newUser)
    }
}
