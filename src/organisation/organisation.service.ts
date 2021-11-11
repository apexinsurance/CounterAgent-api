import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Organisation } from 'src/entities/organisation.entity';
import { Repository } from 'typeorm';

@Injectable()
export class OrganisationService {
  constructor(
    @InjectRepository(Organisation)
    private organisationRepository: Repository<Organisation>
  ) {}
  getAll(): Promise<Organisation[]> {
    return this.organisationRepository.find({
      where: {
        isDeleted: false,
      },
      relations: ['adresses', 'contacts', 'organisationType', 'requisites'],
    });
  }

  getById(id: number): Promise<Organisation> {
    return this.organisationRepository.findOne({
      where: {
        id,
        isDeleted: false,
      },
      relations: ['adresses, contacts, organisationType', 'requisites'],
    });
  }
}
