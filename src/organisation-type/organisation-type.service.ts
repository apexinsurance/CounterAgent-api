import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OrganisationType } from 'src/entities/organisation-type.entity';
import { Repository } from 'typeorm';

@Injectable()
export class OrganisationTypeService {
  constructor(
    @InjectRepository(OrganisationType)
    private organisationType: Repository<OrganisationType>
  ) {}
  findAll(): Promise<OrganisationType[]> {
    return this.organisationType.find();
  }

  findOne(id: number): Promise<OrganisationType> {
    return this.organisationType.findOne(id);
  }
}
