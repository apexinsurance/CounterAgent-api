import { Test, TestingModule } from '@nestjs/testing';
import { RequisiteController } from './requisite.controller';
import { RequisiteService } from './requisite.service';

describe('RequisiteController', () => {
  let controller: RequisiteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RequisiteController],
      providers: [RequisiteService],
    }).compile();

    controller = module.get<RequisiteController>(RequisiteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
