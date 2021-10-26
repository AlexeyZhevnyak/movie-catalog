import {ComponentFixture, TestBed} from '@angular/core/testing';

import {MovieDetailsComponent} from './movie-details.component';
import {Movie} from "../../model/movie/movie";

describe('MovieDetailsComponent', () => {
  let component: MovieDetailsComponent;
  let fixture: ComponentFixture<MovieDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MovieDetailsComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDetailsComponent);
    component = fixture.componentInstance;
    component.movieDetService.movieDetailsSubject$.next(new Movie(1, "testTitle", "testTagline",
      5.6, 1000,
      "2020-06-06", "https://image.tmdb.org/t/p/w500/3kcEGnYBHDeqmdYf8ZRbKdfmlUy.jpg",
      "testOverview", 6000, 10000, ["g1", "g2"],
      120));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('checking the correctness of movie information', () => {
    const nativeElement = fixture.nativeElement;

    let img = nativeElement.querySelector("img");
    let title = nativeElement.querySelector("div.title");
    let voteAv = nativeElement.querySelector("div.vote");
    let tagline = nativeElement.querySelector("div.tagline");
    let relDate = nativeElement.querySelector("span.relDate");
    let runtime = nativeElement.querySelector("span.runtime");
    let overview = nativeElement.querySelector("div.overview");

    expect(img.src).toBe("https://image.tmdb.org/t/p/w500/3kcEGnYBHDeqmdYf8ZRbKdfmlUy.jpg");
    expect(voteAv.textContent).toBe('5.6');
    expect(title.textContent).toBe("testTitle");
    expect(tagline.textContent).toBe("testTagline");
    expect(relDate.textContent).toBe("2020");
    expect(runtime.textContent).toBe('120 min');
    expect(overview.textContent).toBe("testOverview");
  });

  it('check the correctness of header swap condition', () => {
    component.swapToFindMovie();
    component.condition.swapHeaderCondition$.subscribe(e => expect(e).toEqual(true));
  });
});
