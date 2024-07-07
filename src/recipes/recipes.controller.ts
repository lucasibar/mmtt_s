import { Controller, Post, Body, Get, Param, ParseIntPipe } from '@nestjs/common';
import { CreateRecipeDto } from './dto/create-recipes.dto';
import { RecipesService } from './recipes.service';
import { Recipes } from './recipes.entity';

@Controller('recipes')
export class RecipesController {
    constructor(private recipesService: RecipesService){}


    @Get('user/:userId')
    getRecipes(
        @Param('userId', ParseIntPipe) userId : number,
    ):Promise<Recipes[]>{
        return this.recipesService.getRecipes(userId)
    }

    @Get(':id')
    getRecipe(@Param('id', ParseIntPipe) id : number):Promise<Recipes>{
        return this.recipesService.getRecipe(id)
    }


    @Post(':userId')
    createRecipe(
        @Param('userId', ParseIntPipe) userId : number,
        @Body() newRecipe:CreateRecipeDto
    ):Promise<Recipes>{
        return this.recipesService.createRecipe(newRecipe, userId)
    }
}

