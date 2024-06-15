import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm'

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
    
    // @Column({default: "user"}) //user, administrator, nutricionist
    // category: UserCategory
    
    @Column({nullable: true})
    targetKcals: number


}