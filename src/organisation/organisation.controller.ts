import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { Organisation } from 'src/entities/organisation.entity';
import { OrganisationService } from './organisation.service';

@Controller('organisation')
export class OrganisationController {
  constructor(private organisationService: OrganisationService) {}

  @Get()
  @ApiOkResponse({
    description: 'Get all Organisations',
    type: [Organisation],
  })
  findAll(): Promise<Organisation[]> {
    return this.organisationService.getAll();
  }

  @Get(':id')
  @ApiOkResponse({
    description: 'Get Organisation by id',
    type: Organisation,
  })
  async findOne(@Param('id') id: string): Promise<Organisation> {
    return this.organisationService.getById(+id);
  }  
}
