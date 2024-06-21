import { Module } from '@nestjs/common';
import { RecipesController } from './recipes.controller';
import { RecipesService } from './recipes.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Recipes } from './recipes.entity';
import { Users } from 'src/users/users.entity';
import { DayMeals } from 'src/daymeals/daymeals.entity';


@Module({
  imports:[TypeOrmModule.forFeature([Recipes, Users, DayMeals])],
  controllers: [RecipesController],
  providers: [RecipesService]
})
export class RecipesModule {}
