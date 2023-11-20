import { Test, TestingModule } from '@nestjs/testing';
import { CitizenshipController } from './citizenship.controller';
import { CitizenshipService } from './citizenship.service';

describe('CitizenshipController', () => {
  let controller: CitizenshipController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CitizenshipController],
      providers: [CitizenshipService],
    }).compile();

    controller = module.get<CitizenshipController>(CitizenshipController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
