import {TestBed} from '@angular/core/testing';

import {MoviesService} from './movies.service';
import {HttpClientModule} from "@angular/common/http";

describe('MovieServiceService', () => {
  let service: MoviesService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    jasmine.createSpyObj('MoviesService',
      {
        getDAta: [1, 2, 3],

      })
    service = TestBed.inject(MoviesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});
