import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseEntity } from './base-entity.entity';
import { Organisation } from './organisation.entity';
import { Person } from './person.entity';

export enum Type {
  PHONE = 'PHONE',
  EMAIL = 'EMAIL',
  MESSENGER = 'MESSENGER',
  WEBSITE = 'WEBSITE',
  SOCIAL_NETWORK = 'SOCIAL_NETWORK',
}

@Entity()
export class Contact extends BaseEntity {
  @Column({
    type: 'enum',
    enum: Type,
  })
  @ApiProperty({enum: Type})
  type: Type;

  @Column({
    type: 'varchar',
    length: 255,
  })
  @ApiProperty()
  value: string;

  @Column({
    type: 'boolean',
  })
  @ApiProperty()
  isDefault: boolean;

  @ManyToOne(type => Person, person => person.contacts)
  person: Person;

  @ManyToOne(type => Organisation, organisation => organisation.contacts)
  organisation: Organisation;
}
