import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import {TypeOrmModule} from '@nestjs/typeorm'
import { RecipesModule } from './recipes/recipes.module';
import { IngredientsModule } from './ingredients/ingredients.module';
import { DayMealsModule } from './daymeals/daymeals.module';



@Module({ 
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
password:'8426951$1646aS',
      database: 'mamatuttina',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true
    }), 
    UsersModule, RecipesModule, IngredientsModule, DayMealsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
