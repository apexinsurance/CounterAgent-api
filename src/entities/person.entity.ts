import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, OneToMany } from "typeorm";
import { Adress } from "./adress.entity";
import { BaseEntity } from "./base-entity.entity";
import { Contact } from "./contact.entity";
import { CounterAgentTypeEnum } from "./enums/counterAgentType.enum";
import { PersonTypeEnum } from "./enums/personType.enum";
import { Requisite } from "./requisite.entity";

export enum Gender {
  MALE = 'MALE',
  FEMALE = 'FEMALE'
}

@Entity()
export class Person extends BaseEntity {
  @Column({
    type: 'enum',
    enum: CounterAgentTypeEnum,
  })
  @ApiProperty({enum: CounterAgentTypeEnum})
  counterAgentType: CounterAgentTypeEnum

  @Column({
    type: 'int',
  })
  @ApiProperty()
  registeredUserId: number;
  
  @Column({
    type: 'enum',
    enum: PersonTypeEnum,
  })
  @ApiProperty({enum: PersonTypeEnum})
  type: PersonTypeEnum

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
