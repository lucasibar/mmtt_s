import { Recipes } from 'src/recipes/recipes.entity'
import { Users } from 'src/users/users.entity'
import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from 'typeorm'

@Entity()
export class DayMeals{
    
    @PrimaryGeneratedColumn()
    id: number
    
    @Column()
    portions: number
    
    @Column({default: "user"}) //user, administrator, nutricionist
    meal: string
    
    @Column()
    dayNumber: number

    @ManyToOne(() => Users, user => user.daymeal)
    user: Users;

    @ManyToOne(() => Recipes, recipe => recipe.days)
    recipe: Recipes;
}

