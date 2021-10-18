import { Test, TestingModule } from '@nestjs/testing';
import { OrganisationTypeService } from './organisation-type.service';

describe('OrganisationTypeService', () => {
  let service: OrganisationTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrganisationTypeService],
    }).compile();

    service = module.get<OrganisationTypeService>(OrganisationTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
