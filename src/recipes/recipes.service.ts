import { Injectable } from '@nestjs/common';
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

        const newRecipe = this.recipesRepository.create(recipe);
        const user = await this.userRepository.findOne({ where: { id: userId }});
        
        // Asociar receta al usuario
        if (user) {
            newRecipe.users.push(user);
            user.recipes.push(newRecipe);
            await this.userRepository.save(user);
        }

        // Guardar nueva receta
        return this.recipesRepository.save(newRecipe);
    }

    getRecipes() {
        return this.recipesRepository.find();
    }

    getRecipe(id: number) {
        return this.recipesRepository.findOne({
            where: {
                id
            }
        });
    }
}