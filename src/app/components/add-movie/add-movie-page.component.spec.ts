import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AddMoviePageComponent} from './add-movie-page.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";

describe('AddMovieComponent', () => {
  let component: AddMoviePageComponent;
  let fixture: ComponentFixture<AddMoviePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddMoviePageComponent],
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

  it('clearAll() test', () => {
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
});
