import { Injectable } from '@nestjs/common';

@Injectable()
export class AdressService {
  findAll() {
    return `This action returns all adress`;
  }

  findOne(id: number) {
    return `This action returns a #${id} adress`;
  }
}
