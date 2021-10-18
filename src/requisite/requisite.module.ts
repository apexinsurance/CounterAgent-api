import { Module } from '@nestjs/common';
import { RequisiteService } from './requisite.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Requisite } from 'src/entities/requisite.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Requisite])],
  providers: [RequisiteService]
})
export class RequisiteModule {}
