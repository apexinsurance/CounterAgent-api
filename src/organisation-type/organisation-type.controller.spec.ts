import { Test, TestingModule } from '@nestjs/testing';
import { OrganisationTypeController } from './organisation-type.controller';
import { OrganisationTypeService } from './organisation-type.service';

describe('OrganisationTypeController', () => {
  let controller: OrganisationTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrganisationTypeController],
      providers: [OrganisationTypeService],
    }).compile();

    controller = module.get<OrganisationTypeController>(OrganisationTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
