import { Recipes } from "src/recipes/recipes.entity"
import { Users } from "src/users/users.entity"


export class CreateDayMealsDto{    
    id: number
    portions: number
    meal: string
    dayNumber: number
    user: Users
    recipe: Recipes
}