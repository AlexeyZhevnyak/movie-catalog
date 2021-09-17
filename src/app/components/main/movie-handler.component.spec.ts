import {ComponentFixture, TestBed} from '@angular/core/testing';

import {MovieHandlerComponent} from './movie-handler.component';

describe('MainComponent', () => {
  let component: MovieHandlerComponent;
  let fixture: ComponentFixture<MovieHandlerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MovieHandlerComponent]
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
});
