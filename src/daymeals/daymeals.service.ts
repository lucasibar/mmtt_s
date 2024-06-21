import { Injectable } from '@nestjs/common';
import { DayMeals } from './daymeals.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class DayMealsService {
    constructor(@InjectRepository(DayMeals) private daymealsRepository: Repository<DayMeals>) {}
    getDays() {
        return this.daymealsRepository.find();
    }

    
}
