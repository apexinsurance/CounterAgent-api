import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseEntity } from './base-entity.entity';
import { ContactTypeEnum } from './enums/contactType.enum';
import { Organisation } from './organisation.entity';
import { Person } from './person.entity';

@Entity()
export class Contact extends BaseEntity {
  @Column({
    type: 'enum',
    enum: ContactTypeEnum,
  })
  @ApiProperty({enum: ContactTypeEnum})
  type: ContactTypeEnum;

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
