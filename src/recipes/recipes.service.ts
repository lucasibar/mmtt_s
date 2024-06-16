import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {Recipes} from './recipes.entity'
import { UpsertType } from 'typeorm/driver/types/UpsertType';
import {CreateRecipeDto} from './dto/create-recipes.dto'

@Injectable()
export class RecipesService {
    
    constructor(@InjectRepository(Recipes) private recipesRepository: Repository<Recipes>){}

    createRecipe(recipe: CreateRecipeDto){
        const newRecipe = this.recipesRepository.create(recipe)
        return this.recipesRepository.save(newRecipe)
    }
    getRecipes(){
        return this.recipesRepository.find()
    }
    getRecipe(id: number){
        return this.recipesRepository.findOne({
            where:{
                id
            }    
        })
    }
}
