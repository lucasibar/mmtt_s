import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './users.entity';
import { Recipes } from 'src/recipes/recipes.entity';
import { DayMeals } from 'src/daymeals/daymeals.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Users, DayMeals])],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
