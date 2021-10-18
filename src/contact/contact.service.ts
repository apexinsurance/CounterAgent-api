import { Injectable } from '@nestjs/common';

@Injectable()
export class ContactService {
  findAll() {
    return `This action returns all contact`;
  }

  findOne(id: number) {
    return `This action returns a #${id} contact`;
  }
}
