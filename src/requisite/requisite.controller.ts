import { Controller, Get, Param } from '@nestjs/common';
import { RequisiteService } from './requisite.service';

@Controller('requisite')
export class RequisiteController {
  constructor(private readonly requisiteService: RequisiteService) {}
  @Get()
  findAll() {
    return this.requisiteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.requisiteService.findOne(+id);
  }
}
