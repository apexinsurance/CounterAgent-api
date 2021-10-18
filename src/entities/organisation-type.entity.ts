import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, OneToMany } from "typeorm";
import { BaseEntity } from "./base-entity.entity";
import { Organisation } from "./organisation.entity";

@Entity()
export class OrganisationType extends BaseEntity {
  @Column({
    type: 'varchar',
    length: 255,
  })
  @ApiProperty()
  title: string;

  @OneToMany(type => Organisation, organisation => organisation.organisationType)
  organisation: Organisation;
}
