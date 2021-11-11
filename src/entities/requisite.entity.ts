import { ApiProperty } from "@nestjs/swagger";
import { Entity, Column, ManyToOne } from "typeorm";
import { BaseEntity } from "./base-entity.entity";
import { RequisiteTypeEnum } from "./enums/requisiteType.enum";
import { Organisation } from "./organisation.entity";
import { Person } from "./person.entity";

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
    enum: RequisiteTypeEnum,
  })
  @ApiProperty({enum: RequisiteTypeEnum})
  type: RequisiteTypeEnum;

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
