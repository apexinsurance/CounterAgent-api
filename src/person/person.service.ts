import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Person } from 'src/entities/person.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PersonService {
  constructor(
    @InjectRepository(Person)
    private personRepository: Repository<Person>
  ) {}
  getAll() {
    return this.personRepository.find({
      relations: ['adresses', 'contacts', 'requisites'],
  });
  }

  getById(id: number) {
    return this.personRepository.findOne({
      where: {
        id,
      }, 
      relations: ['adresses', 'contacts', 'requisites'],
    })
  }
}
