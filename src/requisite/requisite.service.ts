import { Injectable } from '@nestjs/common';

@Injectable()
export class RequisiteService {
  findAll() {
    return `This action returns all requisite`;
  }

  findOne(id: number) {
    return `This action returns a #${id} requisite`;
  }
}
