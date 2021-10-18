import { Controller, Get, Param } from '@nestjs/common';
import { AdressService } from './adress.service';

@Controller('adress')
export class AdressController {
  constructor(private readonly adressService: AdressService) {}

  @Get()
  findAll() {
    return this.adressService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.adressService.findOne(+id);
  }
}
