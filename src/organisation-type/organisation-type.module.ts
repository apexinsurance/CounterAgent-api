import { Module } from '@nestjs/common';
import { OrganisationTypeService } from './organisation-type.service';
import { OrganisationTypeController } from './organisation-type.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrganisationType } from 'src/entities/organisation-type.entity';

@Module({
  imports: [TypeOrmModule.forFeature([OrganisationType])],
  controllers: [OrganisationTypeController],
  providers: [OrganisationTypeService]
})
export class OrganisationTypeModule {}
