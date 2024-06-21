import { Controller, Get } from '@nestjs/common';
import { DayMealsService } from './daymeals.service';
import { DayMeals } from './daymeals.entity';

@Controller('days')
export class DayMealsController {

    constructor(private daysSarvice: DayMealsService){}

    @Get()
    getDays():Promise<DayMeals[]>{
        return this.daysSarvice.getDays()
    }


}
