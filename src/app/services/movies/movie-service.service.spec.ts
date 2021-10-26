import {TestBed} from '@angular/core/testing';

import {MoviesService} from './movies.service';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Observable} from "rxjs";
import {MoviesDto} from "../../model/movies-dto";
import {Movie} from "../../model/movie/movie";

describe('MovieServiceService', () => {
  let service: MoviesService;
  let resArray: Movie[];
  let fakeHttpService = {
    get<T>(s: string): Observable<T> {
      return new Observable<T>();
    },
    get moviesObs(): Observable<Movie[]> {
      return new Observable<Movie[]>();
    }
  }
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: HttpClient,
          useValue: fakeHttpService
        }
      ],
      imports: [HttpClientModule],
    });

    service = TestBed.inject(MoviesService);

  });

  beforeAll(() => {
    spyOn(fakeHttpService, "get").and.returnValue(new Observable<MoviesDto>(e => e.next({
      limit: 11,
      offset: 1,
      data: [
        new Movie(1, "testTitle", "testTagline", 5.6, 1000,
          "2020-06-06", "https://image.tmdb.org/t/p/w500/3kcEGnYBHDeqmdYf8ZRbKdfmlUy.jpg",
          "testOverview", 6000, 10000, ["g1", "g2"],
          130),
        new Movie(2, "testTitle", "testTagline", 5.7, 1000,
          "2020-06-06", "https://image.tmdb.org/t/p/w500/3kcEGnYBHDeqmdYf8ZRbKdfmlUy.jpg",
          "testOverview", 6000, 10000, ["Action", "g2"],
          130),
        new Movie(3, "testTitle", "testTagline", 5.5, 1000,
          "2020-06-06", "https://image.tmdb.org/t/p/w500/3kcEGnYBHDeqmdYf8ZRbKdfmlUy.jpg",
          "testOverview", 6000, 10000, ["g1", "g2"],
          130)
      ],
      totalAmount: 3
    })))
  })
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it("sort movies asc by vote average", () => {
    // spyOnProperty(fakeHttpService, "moviesObs", "get");
    service.sortMovies("vote_average");
    service.moviesObs.subscribe(value => expect(value).toEqual(
      [
        new Movie(3, "testTitle", "testTagline", 5.5, 1000,
          "2020-06-06", "https://image.tmdb.org/t/p/w500/3kcEGnYBHDeqmdYf8ZRbKdfmlUy.jpg",
          "testOverview", 6000, 10000, ["g1", "g2"],
          130),
        new Movie(1, "testTitle", "testTagline", 5.6, 1000,
          "2020-06-06", "https://image.tmdb.org/t/p/w500/3kcEGnYBHDeqmdYf8ZRbKdfmlUy.jpg",
          "testOverview", 6000, 10000, ["g1", "g2"],
          130),
        new Movie(2, "testTitle", "testTagline", 5.7, 1000,
          "2020-06-06", "https://image.tmdb.org/t/p/w500/3kcEGnYBHDeqmdYf8ZRbKdfmlUy.jpg",
          "testOverview", 6000, 10000, ["Action", "g2"],
          130)
      ]
    ))

  })

  it('filter by genre(Action)', () => {
    service.filterMovies("Action");
    service.moviesObs.subscribe(value => expect(value).toEqual([new Movie(2, "testTitle", "testTagline", 5.7, 1000,
      "2020-06-06", "https://image.tmdb.org/t/p/w500/3kcEGnYBHDeqmdYf8ZRbKdfmlUy.jpg",
      "testOverview", 6000, 10000, ["Action", "g2"],
      130)]))
  });

});
