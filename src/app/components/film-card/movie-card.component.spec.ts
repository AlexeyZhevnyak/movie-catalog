import {ComponentFixture, TestBed} from '@angular/core/testing';

import {MovieCardComponent} from './movie-card.component';
import {Movie} from "../../model/movie/movie";

describe('FilmCardComponent', () => {
  let component: MovieCardComponent;
  let fixture: ComponentFixture<MovieCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MovieCardComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieCardComponent);
    component = fixture.componentInstance;
    component.movie = new Movie(1, "testTitle", "testTagline", 5.6, 1000,
      "2020-06-06", "https://image.tmdb.org/t/p/w500/3kcEGnYBHDeqmdYf8ZRbKdfmlUy.jpg",
      "testOverview", 6000, 10000, ["g1", "g2"],
      120);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('test markup', () => {
    const nativeElement = fixture.nativeElement;
    const h3 = nativeElement.querySelector('h3.movie-title');
    const year = nativeElement.querySelector('div.year');
    const genres = nativeElement.querySelector('#genres');
    const posterPath = nativeElement.querySelector('img.poster');
    expect(h3!.textContent).toBe("testTitle");
    expect(year.textContent).toBe("2020");
    expect(genres.textContent).toBe("g1,g2");
    expect(posterPath.src).toBe("https://image.tmdb.org/t/p/w500/3kcEGnYBHDeqmdYf8ZRbKdfmlUy.jpg");
  });
});
