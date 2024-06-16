import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {Ingredients} from './ingredients.entity'
import { UpsertType } from 'typeorm/driver/types/UpsertType';
import {CreateIngredientDto} from './dto/create-ingredients.dto'

@Injectable()
export class IngredientsService {
    
    constructor(@InjectRepository(Ingredients) private ingredientsRepository: Repository<Ingredients>){}

    createIngredient(recipe: CreateIngredientDto){
        const newIngredient = this.ingredientsRepository.create(recipe)
        return this.ingredientsRepository.save(newIngredient)
    }
    getIngredients(){
        return this.ingredientsRepository.find()
    }
    getIngredient(id: number){
        return this.ingredientsRepository.findOne({
            where:{
                id
            }    
        })
    }
}
