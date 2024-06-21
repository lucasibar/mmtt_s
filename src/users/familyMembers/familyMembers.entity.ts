import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm'

@Entity("familyMembers")
export class FamilyMembers{
    
    @PrimaryGeneratedColumn()
    id: number
    
    @Column()
    integrantName: string
    
    @Column()
    age: number
    
    @Column()
    sex: string
    
    @Column() //user, administrator, nutricionist
    hight: number
    
    @Column()
    weight: number


}