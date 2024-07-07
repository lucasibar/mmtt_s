import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { DayMealsService } from './daymeals.service';
import { DayMeals } from './daymeals.entity';
import { CreateDayMealDto } from './dto/create-daymeals.dto';
import { DayMealDto } from './dto/daymeals.dto';

@Controller('daymeals')
export class DayMealsController {

    constructor(private daysSarvice: DayMealsService){}
    
    @Post(':userId/:recipeId')
    saveRecipeInDayMeal(
        @Param('userId', ParseIntPipe) userId : number,
        @Param('recipeId', ParseIntPipe) recipeId : number,
        @Body() mealRecipe : CreateDayMealDto
    ) : Promise<string> {
        console.log("llegue!!")
        return this.daysSarvice.saveRecipeInDayMeal(userId, recipeId, mealRecipe)
    }
    @Get(':userId')
    getAllDaymeals(
        @Param('userId', ParseIntPipe) userId : number
    ):Promise<DayMeals[]>{
        return this.daysSarvice.getAllDaymeals(userId)
    }

    @Get(':userId/:dayNumber')
    getDaymeals(
        @Param('userId', ParseIntPipe) userId : number,
        @Param('dayNumber', ParseIntPipe) dayNumber : number
    ) : Promise<DayMeals[]>{
        return this.daysSarvice.getDaymeals(userId, dayNumber)
    }


}
