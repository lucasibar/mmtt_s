import { Users } from 'src/users/users.entity'
import {Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn} from 'typeorm'
import { DayMeals } from 'src/daymeals/daymeals.entity'

@Entity()
export class Recipes{

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    recipeName: string

    @Column({default: "user"})
    category: string

    @Column({default: 1})
    totalPortions: number

    @OneToMany(() => DayMeals, daymeal => daymeal.recipe)
    days: DayMeals[];

    @ManyToOne(() => Users, user => user.recipes)
    user: Users;

    // @ManyToMany(()=> Users, users => users.recipes)
    // @JoinTable({
    //     name:'Days',
    //     joinColumn: {
    //         name:'userId'
    //     },
    //     inverseJoinColumn: {
    //         name:'recipeId'
    //     }
    // })

}

