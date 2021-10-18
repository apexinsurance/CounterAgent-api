import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContactModule } from './contact/contact.module';
import { AdressModule } from './adress/adress.module';
import { PersonModule } from './person/person.module';
import { OrganisationModule } from './organisation/organisation.module';
import { OrganisationTypeModule } from './organisation-type/organisation-type.module';
import { RequisiteModule } from './requisite/requisite.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST,
      port: +process.env.DATABASE_PORT,
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      entities: [],
      synchronize: true,
      autoLoadEntities: true,
    }),
    ContactModule,
    AdressModule,
    PersonModule,
    OrganisationModule,
    OrganisationTypeModule,
    RequisiteModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
