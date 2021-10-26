import {ComponentFixture, TestBed} from '@angular/core/testing';

import {EditComponent} from './edit.component';
import {AppRoutingModule} from "../../app-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {Movie} from "../../model/movie/movie";
import {Observable} from "rxjs";
import {MoviesService} from "../../services/movies/movies.service";

describe('EditComponent', () => {
  let component: EditComponent;
  let fixture: ComponentFixture<EditComponent>;


  let fakeMovieService = {
    editMovie(movie: Movie) {
      return new Observable<Object>();
    }
  };


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditComponent],
      imports: [AppRoutingModule,
        HttpClientModule],
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
    fixture = TestBed.createComponent(EditComponent);
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

  it('edit movie should be called', function () {

    var spy = spyOn(fakeMovieService, "editMovie").and.callThrough();
    component.submit();
    expect(spy).toHaveBeenCalled();
  });
});
