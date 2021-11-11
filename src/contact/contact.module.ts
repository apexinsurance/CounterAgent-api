import { Module } from '@nestjs/common';
import { ContactService } from './contact.service';
import { Contact } from 'src/entities/contact.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Contact])]
})
export class ContactModule {}
