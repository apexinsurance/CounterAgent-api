import { Module } from '@nestjs/common';
import { AdressService } from './adress.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Adress } from 'src/entities/adress.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Adress])],
  providers: [AdressService]
})
export class AdressModule {}
