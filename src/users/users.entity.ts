import { DayMeals } from 'src/daymeals/daymeals.entity'
import { Recipes } from 'src/recipes/recipes.entity'
import {Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn} from 'typeorm'

@Entity()
export class Users{
    
    @PrimaryGeneratedColumn()
    id: number
    
    @Column()
    name: string
    
    @Column()
    password: string
    
    @Column({unique: true})
    mail: string
    
    @Column({default: "user"}) //user, administrator, nutricionist
    category: string
    
    @Column({nullable: true})
    targetKcals: number



    @OneToMany(() => DayMeals, daymeal => daymeal.user)
    daymeals: DayMeals[];

    @OneToMany(() => Recipes, recipe => recipe.user)
    recipes: Recipes[]

}