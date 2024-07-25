import { TestBed } from '@angular/core/testing';

import { QuaryparamService } from './quaryparam.service';

describe('QuaryparamService', () => {
  let service: QuaryparamService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuaryparamService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
