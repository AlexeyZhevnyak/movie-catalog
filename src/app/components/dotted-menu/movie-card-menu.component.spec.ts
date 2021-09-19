import {ComponentFixture, TestBed} from '@angular/core/testing';

import {MovieCardMenuComponent} from './movie-card-menu.component';

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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
