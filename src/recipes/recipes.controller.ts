import { Controller, Post, Body, Get, Param, ParseIntPipe } from '@nestjs/common';
import { CreateRecipeDto } from './dto/create-recipes.dto';
import { RecipesService } from './recipes.service';
import { Recipes } from './recipes.entity';

@Controller('recipes')
export class RecipesController {
    constructor(private recipesService: RecipesService){}


    @Get()
    getRecipes():Promise<Recipes[]>{
        return this.recipesService.getRecipes()
    }

    @Get(':id')
    getRecipe(@Param('id', ParseIntPipe) id : number):Promise<Recipes>{
        return this.recipesService.getRecipe(id)
    }

    @Post()
    createRecipe(@Body() newRecipe:CreateRecipeDto):Promise<Recipes >{
        return this.recipesService.createRecipe(newRecipe)
    }
}

