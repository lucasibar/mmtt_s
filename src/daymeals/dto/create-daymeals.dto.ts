import { Ingredients } from "src/ingredients/ingredients.entity"
import { Recipes } from "src/recipes/recipes.entity"
import { Users } from "src/users/users.entity"


export class CreateDayMealDto{    
    meal: string
    dayNumber: number
    mealPortions: number
}