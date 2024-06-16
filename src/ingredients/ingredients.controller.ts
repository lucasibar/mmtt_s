import { Controller, Post, Body, Get, Param, ParseIntPipe } from '@nestjs/common';
import { CreateIngredientDto } from './dto/create-ingredients.dto';
import { IngredientsService } from './ingredients.service';
import {Ingredients} from './ingredients.entity'

@Controller('ingredients')
export class IngredientsController {    constructor(private ingredientsService: IngredientsService){}


@Get()
getIngredients():Promise<Ingredients[]>{
    return this.ingredientsService.getIngredients()
}

@Get(':id')
getRecipe(@Param('id', ParseIntPipe) id : number):Promise<Ingredients>{
    return this.ingredientsService.getIngredient(id)
}

@Post()
createRecipe(@Body() newIngredient:CreateIngredientDto):Promise<Ingredients >{
    return this.ingredientsService.createIngredient(newIngredient)
}
}
