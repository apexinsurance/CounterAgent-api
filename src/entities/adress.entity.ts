import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, ManyToOne } from "typeorm";
import { BaseEntity } from "./base-entity.entity";
import { Organisation } from "./organisation.entity";
import { Person } from "./person.entity";

export enum Type {
  ACTUAL = 'ACTUAL',
  REGISTERED = 'REGISTERED',
  POSTAL = 'POSTAL',
}

@Entity()
export class Adress extends BaseEntity {
  @Column({
    type: 'enum',
    enum: Type,
  })
  @ApiProperty({enum: Type})
  type: Type

  @Column({
    type: 'varchar',
    length: 255,
  })
  @ApiProperty()
  region: string;

  @Column({
    type: 'varchar',
    length: 255,
  })
  @ApiProperty()
  district: string;

  @Column({
    type: 'varchar',
    length: 255,
  })
  @ApiProperty()
  city: string;

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

  @ManyToOne(type => Person, person => person.adresses)
  person: Person;

  @ManyToOne(type => Organisation, organisation => organisation.adresses)
  organisation: Organisation;
}
