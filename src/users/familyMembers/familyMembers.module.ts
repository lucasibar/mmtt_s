import { Module } from '@nestjs/common';
import { FamilyMembersService } from './familyMembers.service';
import { FamilyMembersController } from './familyMembers.controller';

@Module({
  providers: [FamilyMembersService],
  controllers: [FamilyMembersController]
})
export class FamilyMembersModule {}
