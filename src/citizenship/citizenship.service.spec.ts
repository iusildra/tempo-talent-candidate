import { Test, TestingModule } from '@nestjs/testing';
import { CitizenshipService } from './citizenship.service';

describe('CitizenshipService', () => {
  let service: CitizenshipService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CitizenshipService],
    }).compile();

    service = module.get<CitizenshipService>(CitizenshipService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
