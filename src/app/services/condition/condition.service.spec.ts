import {TestBed} from '@angular/core/testing';

import {HeaderSwapService} from './header-swap.service';

describe('ConditionService', () => {
  let service: HeaderSwapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeaderSwapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
