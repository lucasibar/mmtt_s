import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Recipes } from './recipes.entity';
import { CreateRecipeDto } from './dto/create-recipes.dto';
import { Users } from 'src/users/users.entity';

@Injectable()
export class RecipesService {
    constructor(
        @InjectRepository(Recipes)
        private recipesRepository: Repository<Recipes>,
        @InjectRepository(Users)
        private userRepository: Repository<Users>,
    ) {}
    async createRecipe(recipe: CreateRecipeDto, userId: number) {
        const user= await this.userRepository.findOne({where:{id:userId}})
        
        const newRecipe = this.recipesRepository.create(recipe);
        newRecipe.user = user

        return await this.recipesRepository.save(newRecipe);
    }




    async getRecipes(userId: number):Promise<Recipes[]> {
        const recipesLoad= await this.recipesRepository.find({
            where:{
                user:{ id: userId}
            },
        });
        return recipesLoad
    }





    getRecipe(userId: number) {
        return this.recipesRepository.findOne({
            where: {
                user: {id: userId}
            },
            relations: ['user']
        });
    }
}