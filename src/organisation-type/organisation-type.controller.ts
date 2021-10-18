import { Controller, Get, Param } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { OrganisationType } from 'src/entities/organisation-type.entity';
import { OrganisationTypeService } from './organisation-type.service';

@Controller('organisation-type')
export class OrganisationTypeController {
  constructor(private readonly organisationTypeService: OrganisationTypeService) {}

  @Get()
  @ApiOkResponse({
    description:  'Get all Organisation types',
    type: [OrganisationType],
  })
  findAll() {
    return this.organisationTypeService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({
    description: 'Get one Organisation Type by id',
    type: OrganisationType,
  })
  findOne(@Param('id') id: string) {
    return this.organisationTypeService.findOne(+id);
  }
}
