import {ComponentFixture, TestBed} from '@angular/core/testing';

import {MovieHandlerComponent} from './movie-handler.component';
import {HttpClientModule} from "@angular/common/http";
import {Observable} from "rxjs";
import {Movie} from "../../model/movie/movie";
import {MoviesService} from "../../services/movies/movies.service";
import {DebugElement} from "@angular/core";
import {By} from "@angular/platform-browser";
import {HomeComponent} from "../home/home.component";

describe('MainComponent', () => {
  let component: MovieHandlerComponent;
  let fixture: ComponentFixture<MovieHandlerComponent>;
  let cardElem: DebugElement;
  let homeComp: HomeComponent;
  let fakeMovieService = {
    get moviesObs(): Observable<Movie[]> {
      return new Observable<Movie[]>();
    }
  }
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MovieHandlerComponent, HomeComponent],
      imports: [HttpClientModule],
      providers: [
        {
          provide: MoviesService,
          useValue: fakeMovieService
        }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieHandlerComponent);
    homeComp = TestBed.createComponent(HomeComponent).componentInstance;

    component = fixture.componentInstance;
    cardElem = fixture.debugElement.query(By.css('.film-cards'));
    spyOnProperty(fakeMovieService, "moviesObs", "get").and.returnValue(
      new Observable<Movie[]>(e => e.next(
        [
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
        ]
      ))
    )
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("swap condition should be false", () => {
    let value!: boolean;
    spyOn(component, "swapHeader").and.callThrough();
    cardElem.children[0].triggerEventHandler('click', null);
    homeComp.headerSwapService.swapHeaderCondition$.subscribe(e => value = e)
    expect(value).toBe(false);
  })
});
