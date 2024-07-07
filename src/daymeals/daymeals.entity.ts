import { Recipes } from 'src/recipes/recipes.entity'
import { Users } from 'src/users/users.entity'
import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from 'typeorm'

@Entity()
export class DayMeals{
    
    @PrimaryGeneratedColumn()
    id: number
    
    @Column()
    mealPortions: number
    
    @Column({default: "user"}) //user, administrator, nutricionist
    meal: string
    
    @Column()
    dayNumber: number

    @ManyToOne(() => Users, user => user.daymeals)
    user: Users;

    @ManyToOne(() => Recipes, recipe => recipe.days)
    recipe: Recipes;
}

