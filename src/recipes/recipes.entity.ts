import { Users } from 'src/users/users.entity'
import {Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn} from 'typeorm'
import { DayMeals } from 'src/daymeals/daymeals.entity'

@Entity()
export class Recipes{
    
    @PrimaryGeneratedColumn()
    id: number
    
    @Column()
    name: string
    
    @Column()
    portion: string
    
    @Column({default: "user"}) //user, administrator, nutricionist
    category: string
    
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
   
    
    @OneToMany(() => DayMeals, daymeal => daymeal.user)
    days: DayMeals[];


}

