import {ComponentFixture, TestBed} from '@angular/core/testing';

import {MovieHandlerComponent} from './movie-handler.component';
import {HttpClientModule} from "@angular/common/http";
import {Observable} from "rxjs";
import {Movie} from "../../model/movie/movie";
import {MoviesService} from "../../services/movies/movies.service";

describe('MainComponent', () => {
  let component: MovieHandlerComponent;
  let fixture: ComponentFixture<MovieHandlerComponent>;

  const fakeFirstDependencyService = {
    _movies: [
      new Movie(1, "testTitle", "testTagline", 5.6, 1000,
        "2020-06-06", "https://image.tmdb.org/t/p/w500/3kcEGnYBHDeqmdYf8ZRbKdfmlUy.jpg",
        "testOverview", 6000, 10000, ["g1", "g2"],
        120)
    ],
    set movies(value: Movie[]) {
      // this._movies = value;
    },
    get moviesObs(): Observable<Movie[]> {
      return new Observable<Movie[]>();
    },
    // sendGetRequest(): Observable<MoviesDto> {
    //   return new Observable<MoviesDto>()
    // },
    sortMovies(field: keyof Movie): void {

    }
  };


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        {
          provide: MoviesService,
          useValue: fakeFirstDependencyService
        }
      ],
      declarations: [MovieHandlerComponent],
      imports: [HttpClientModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieHandlerComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('sort by runtime test', () => {
    spyOn(fakeFirstDependencyService, "sortMovies").and.callThrough();
    spyOnProperty(fakeFirstDependencyService, "moviesObs", "get").and.callThrough();

    spyOnProperty(fakeFirstDependencyService, "movies", "set").and.callThrough();
    component.moviesService.movies = [
      new Movie(1, "testTitle", "testTagline", 5.6, 1000,
        "2020-06-06", "https://image.tmdb.org/t/p/w500/3kcEGnYBHDeqmdYf8ZRbKdfmlUy.jpg",
        "testOverview", 6000, 10000, ["g1", "g2"],
        120),
      new Movie(1, "testTitle", "testTagline", 5.7, 1000,
        "2020-06-06", "https://image.tmdb.org/t/p/w500/3kcEGnYBHDeqmdYf8ZRbKdfmlUy.jpg",
        "testOverview", 6000, 10000, ["g1", "g2"],
        130),
      new Movie(1, "testTitle", "testTagline", 5.5, 1000,
        "2020-06-06", "https://image.tmdb.org/t/p/w500/3kcEGnYBHDeqmdYf8ZRbKdfmlUy.jpg",
        "testOverview", 6000, 10000, ["g1", "g2"],
        110)
    ];
    component.moviesService.moviesObs.subscribe(value => {
      value.forEach(e => console.log(e))
    })

    // spyOn(fakeFirstDependencyService, "sortMovies").and.callThrough();
    // component.sortMovies("vote_average");
    // spyOn(fakeFirstDependencyService, "sortMovies").and.callThrough();
    // component.sortMovies("vote_average");
  })
});
