import { ApiProperty } from "@nestjs/swagger";
import { Entity, Column, ManyToMany, ManyToOne } from "typeorm";
import { BaseEntity } from "./base-entity.entity";
import { Organisation } from "./organisation.entity";
import { Person } from "./person.entity";

export enum Type {
  LOCAL_BANK = 'LOCAL_BANK',
  INTERNATIONAL_BANK = 'INTERNATIONAL_BANK',
  PAYMENT_SYSTEM = 'PAYMENT_SYSTEM',
}

@Entity()
export class Requisite extends BaseEntity {
  @Column({
    type: 'varchar',
    length: 255,
  })
  @ApiProperty()
  title: string;

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
  accountNumber: string;

  @Column({
    type: 'boolean',
  })
  @ApiProperty()
  isDefault: boolean;

  @Column({
    type: 'int',
  })
  @ApiProperty()
  requisiteId: number;

  @ManyToOne(type => Person, person => person.requisites)
  person: Person;

  @ManyToOne(type => Organisation, organisation => organisation.requisites)
  organisation: Organisation;
}
