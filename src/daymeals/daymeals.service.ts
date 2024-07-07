import { Injectable } from '@nestjs/common';
import { DayMeals } from './daymeals.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Recipes } from 'src/recipes/recipes.entity';
import { Users } from 'src/users/users.entity';
import { CreateDayMealDto } from './dto/create-daymeals.dto';

@Injectable()
export class DayMealsService {
   
    constructor(
        @InjectRepository(DayMeals) private daymealsRepository: Repository<DayMeals>,
        @InjectRepository(Recipes) private recipesRepository: Repository<Recipes>,
        @InjectRepository(Users) private userRepository: Repository<Users>

    ) {}
    
    getAllDaymeals(userId: number) {
        return this.daymealsRepository.find({
            where:{
                user: { id: userId }
            },
            relations: ['user'], 
        });
    }
    async getDaymeals(userId: number, dayNumber: number) {
        const loadUsermeals = await this.daymealsRepository.find({
            where: { 
                dayNumber,
                user: { id: userId }
            },
            relations: ['user', 'recipe']
        });
        console.log(loadUsermeals);
        return loadUsermeals;
    } 

    
    async saveRecipeInDayMeal(userId: number, recipeId: number, mealRecipe: CreateDayMealDto) {
      
        // const recipe = await this.recipesRepository.findOne({ where: { id: recipeId } });
        // const user = await this.userRepository.findOne({ where: { id: userId } });

        // if (!recipe || !user) {
        //     throw new Error('Usuario o receta no encontrados');
        // }

        // let loadDayMeal = await this.daymealsRepository.findOne({
        //     where: {
        //         user: { id: userId },
        //         meal: mealRecipe.meal,
        //         dayNumber: mealRecipe.dayNumber
        //     }
        // });

        // if (loadDayMeal) {
        //     loadDayMeal.recipe = recipe;
        //     loadDayMeal.mealPortions = mealRecipe.mealPortions;
        //     return await this.daymealsRepository.save(loadDayMeal);
        // }

        // const newMeal = this.daymealsRepository.create(mealRecipe);
        // newMeal.recipe = recipe;
        // newMeal.user = user;

        return "await this.daymealsRepository.save();"
    }
    
}
