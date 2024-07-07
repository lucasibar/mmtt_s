import { Recipes } from "src/recipes/recipes.entity"
import { Users } from "src/users/users.entity"


export class DayMealDto{  
    id: number  
    meal: string
    dayNumber: number
    mealPortions: number
}