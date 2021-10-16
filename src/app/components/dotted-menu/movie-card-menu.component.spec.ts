import {ComponentFixture, TestBed} from '@angular/core/testing';

import {MovieCardMenuComponent} from './movie-card-menu.component';
import {Movie} from "../../model/movie/movie";

describe('DottedMenuComponent', () => {
  let component: MovieCardMenuComponent;
  let fixture: ComponentFixture<MovieCardMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MovieCardMenuComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieCardMenuComponent);
    component = fixture.componentInstance;
    component.movie = new Movie(1, "testTitle", "testTagline", 5.6, 1000,
      "2020-06-06", "https://image.tmdb.org/t/p/w500/3kcEGnYBHDeqmdYf8ZRbKdfmlUy.jpg", "testOverview", 6000, 10000, ["g1", "g2"],
      120);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('dotted menu transform test', () => {
    component.change();
    expect(component.isMark).toBe(true);
    expect(component.headerMenu.nativeElement.style.display).toBe('block');
    expect(component.header.nativeElement.style.justifyContent).toBe('flex-end');
  });
  it('mouseOut() test', () => {
    component.mouseOut();
    component.isMark = false;
    expect(component.headerMenu.nativeElement.style.display).toBe('none');
    expect(component.headerBurger.nativeElement.style.display).toBe('block');
  });
});
