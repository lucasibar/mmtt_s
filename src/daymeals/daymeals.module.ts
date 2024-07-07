import { Module } from '@nestjs/common';
import { DayMealsController } from './daymeals.controller';
import { DayMealsService } from './daymeals.service';
import { DayMeals } from './daymeals.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Recipes } from 'src/recipes/recipes.entity';
import { Users } from 'src/users/users.entity';
import { UsersModule } from 'src/users/users.module';
import { RecipesModule } from 'src/recipes/recipes.module';

@Module({
  imports:[TypeOrmModule.forFeature([DayMeals, Recipes, Users])],
  controllers: [DayMealsController],
  providers: [DayMealsService],
  exports: [DayMealsService]
})
export class DayMealsModule {}
