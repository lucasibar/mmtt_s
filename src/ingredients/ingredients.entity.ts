import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm'

@Entity()
export class Ingredients{
    
    @PrimaryGeneratedColumn()
    id: number
    
    @Column()
    name: string
    
    @Column()
    portion: string
    
    @Column({default: "user"}) //user, administrator, nutricionist
    category: string
    
    // @Column({nullable: true})
    // userId: number


}

