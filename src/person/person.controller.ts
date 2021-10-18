import { Controller, Get, Param } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { Person } from 'src/entities/person.entity';
import { PersonService } from './person.service';

@Controller('person')
export class PersonController {
  constructor(private readonly personService: PersonService) {}

  @Get()
  @ApiOkResponse({
    description: 'Get all Persons',
    type: [Person],
  })
  findAll() {
    return this.personService.getAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.personService.getById(+id);
  }
}
