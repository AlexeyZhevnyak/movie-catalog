import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AddMoviePageComponent} from './add-movie-page.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {MoviesService} from "../../services/movies/movies.service";
import {AddMovieDTO} from "../../model/add-movie-dto";
import {Observable} from "rxjs";

describe('AddMovieComponent', () => {
  let component: AddMoviePageComponent;
  let fixture: ComponentFixture<AddMoviePageComponent>;

  let fakeService = {
    addMovie(movie: AddMovieDTO): Observable<Object> {
      return new Observable<Object>();
    }
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddMoviePageComponent],
      providers: [
        {
          provide: MoviesService,
          useValue: fakeService
        }
      ],
      imports: [HttpClientModule, FormsModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMoviePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component).toBeTruthy();
  });

  it('clearAll(): all fields should become empty', () => {
    component.clearAll();
    const nativeElement = fixture.nativeElement;
    const title = nativeElement.querySelector('#title').value;
    const genres = nativeElement.querySelector('#genres').value;
    const relDate = nativeElement.querySelector('#relDate').value;
    const movUrl = nativeElement.querySelector('#movUrl').value;
    const overview = nativeElement.querySelector('#overview').value;
    const runtime = nativeElement.querySelector('#runtime').value;
    const revenue = nativeElement.querySelector('#revenue').value;
    const tagline = nativeElement.querySelector('#tagline').value;
    const voteAv = nativeElement.querySelector('#voteAv').value;
    const voteCount = nativeElement.querySelector('#voteCount').value;
    expect(title).toBe('');
    expect(genres).toBe('');
    expect(relDate).toBe('');
    expect(movUrl).toBe('');
    expect(overview).toBe('');
    expect(runtime).toBe('');
    expect(revenue).toBe('');
    expect(tagline).toBe('');
    expect(voteAv).toBe('');
    expect(voteCount).toBe('');
  })

  it("addMovie should be called", () => {
    var spy = spyOn(fakeService, "addMovie").and.callThrough();
    component.submit();
    expect(spy).toHaveBeenCalledTimes(1);
  })
});
