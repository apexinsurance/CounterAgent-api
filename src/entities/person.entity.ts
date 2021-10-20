import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, OneToMany } from "typeorm";
import { Adress } from "./adress.entity";
import { BaseEntity } from "./base-entity.entity";
import { Contact } from "./contact.entity";
import { Requisite } from "./requisite.entity";

export enum Type {
  RESIDENT = 'RESITENT',
  MILITARY = 'MILITARY',
  FOREIGN_RESIDENT = 'FOREIGN_RESIDENT',
  FOREIGNER = 'FOREIGNER',
  WITHOUT_CITIZENSHIP = 'WITHOUT_CITIZENSHIP',
}

export enum CounterAgentType {
  ORGANISATION = 'ORGANISATION',
  PERSON = 'PERSON',
}

export enum Gender {
  MALE = 'MALE',
  FEMALE = 'FEMALE'
}

@Entity()
export class Person extends BaseEntity {
  @Column({
    type: 'enum',
    enum: CounterAgentType,
  })
  @ApiProperty({enum: CounterAgentType})
  counterAgentType: CounterAgentType

  @Column({
    type: 'int',
  })
  @ApiProperty()
  registeredUserId: number;
  
  @Column({
    type: 'enum',
    enum: Type,
  })
  @ApiProperty({enum: Type})
  type: Type

  @Column({
    type: 'boolean',
  })
  @ApiProperty()
  isIndividualEnterpreneur: boolean;

  @Column({
    type: 'varchar',
    length: 255,
  })
  @ApiProperty()
  documentSeries: string;

  @Column({
    type: 'varchar',
    length: 255,
  })
  @ApiProperty()
  documentNumber: string;

  @Column({
    type: 'date'
  })
  @ApiProperty()
  documentGivenDate: Date;

  @Column({
    type: 'varchar',
    length: 255,
  })
  @ApiProperty()
  PINFL: string;

  @Column({
    type: 'date'
  })
  @ApiProperty()
  documentValidUntil: Date;

  @Column({
    type: 'varchar',
    length: 255,
  })
  @ApiProperty()
  givenBy: string;

  @Column({
    type: 'varchar',
    length: 255,
  })
  @ApiProperty()
  firstName: string;

  @Column({
    type: 'varchar',
    length: 255,
  })
  @ApiProperty()
  lastName: string;

  @Column({
    type: 'varchar',
    length: 255,
  })
  @ApiProperty()
  fathersName: string;

  @Column({
    type: 'date',
  })
  @ApiProperty()
  bornDate: Date;

  @Column({
    type: 'enum',
    enum: Gender
  })
  @ApiProperty({enum: Gender})
  gender: Gender;

  @Column({
    type: 'varchar',
    length: 255,
  })
  @ApiProperty()
  citizenship: string;
  
  @OneToMany(type => Adress, adress => adress.person)
  @ApiProperty({type: () => Adress})
  adresses: Adress[];

  @OneToMany(type => Contact, contact => contact.person)
  @ApiProperty({type: () => Contact})
  contacts: Contact[];

  @OneToMany(type => Requisite, requisite => requisite.person)
  @ApiProperty({type: () => Requisite})
  requisites: Requisite[];
}
