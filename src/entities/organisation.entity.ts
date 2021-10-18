import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, ManyToOne, OneToMany } from "typeorm";
import { Adress } from "./adress.entity";
import { BaseEntity } from "./base-entity.entity";
import { Contact } from "./contact.entity";
import { OrganisationType } from "./organisation-type.entity";
import { CounterAgentType } from "./person.entity";
import { Requisite } from "./requisite.entity";

@Entity()
export class Organisation extends BaseEntity {
  @Column({
    type: 'enum',
    enum: CounterAgentType,
  })
  @ApiProperty({enum: CounterAgentType})
  counterAgentType: CounterAgentType
  
  @Column({
    type: 'varchar',
    length: 255,
  })
  @ApiProperty()
  title: string;

  @Column({
    type: 'boolean',
  })
  @ApiProperty()
  isResident: boolean;

  @Column({
    type: 'int',
  })
  @ApiProperty()
  registeredUserId: number;

  @Column({
    type: 'varchar',
    length: 255,
  })
  @ApiProperty()
  TIN: string;

  @Column({
    type: 'varchar',
    length: 255,
  })
  @ApiProperty()
  registrationCertificateNo: string;

  @Column({
    type: 'date',
  })
  @ApiProperty()
  registrationCertificateDate: Date;

  @OneToMany(type => Adress, adress => adress.organisation)
  @ApiProperty({ type: () => Adress })
  adresses: Adress[];

  @OneToMany(type => Contact, contact => contact.organisation)
  @ApiProperty({ type: () => Contact })
  contacts: Contact[];

  @ManyToOne(type => OrganisationType, organisationType => organisationType.organisation)
  @ApiProperty({ type: () => OrganisationType })
  organisationType: OrganisationType;

  @OneToMany(type => Requisite, requisite => requisite.organisation)
  @ApiProperty({ type: () => Requisite })
  requisites: Requisite[];
}
