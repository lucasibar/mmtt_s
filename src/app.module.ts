import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import {TypeOrmModule} from '@nestjs/typeorm'
import { RecipesModule } from './recipes/recipes.module';
import { IngredientsModule } from './ingredients/ingredients.module';
import { FamilyMembersModule } from './users/familyMembers/familyMembers.module';



@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',

      database: 'mamatuttina',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true
    }), 
    UsersModule, RecipesModule, IngredientsModule, FamilyMembersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
