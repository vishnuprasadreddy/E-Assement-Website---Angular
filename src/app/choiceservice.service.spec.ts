import { TestBed } from '@angular/core/testing';

import { ChoiceserviceService } from './choiceservice.service';

describe('ChoiceserviceService', () => {
  let service: ChoiceserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChoiceserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
