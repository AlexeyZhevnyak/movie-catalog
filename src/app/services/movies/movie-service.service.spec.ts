import {TestBed} from '@angular/core/testing';

import {MoviesService} from './movies.service';
import {HttpClientModule} from "@angular/common/http";
import {Observable} from "rxjs";
import {Movie} from "../../model/movie/movie";

describe('MovieServiceService', () => {
  let service: MoviesService;
  let moviesObs: Observable<Movie[]>;
  let movies: Movie[];
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    jasmine.createSpyObj('MoviesService',
      {
        getDAta: [1, 2, 3],

      })
    service = TestBed.inject(MoviesService);
    service.moviesObs.subscribe(
      value => movies = value
    )
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // it('deleteMovie() test', () => {
  //   service.deleteMovie()
  // })

});
