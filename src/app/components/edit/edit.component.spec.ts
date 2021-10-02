import {ComponentFixture, TestBed} from '@angular/core/testing';

import {EditComponent} from './edit.component';
import {AppRoutingModule} from "../../app-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {Movie} from "../../model/movie/movie";

describe('EditComponent', () => {
  let component: EditComponent;
  let fixture: ComponentFixture<EditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditComponent],
      imports: [AppRoutingModule,
        HttpClientModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditComponent);
    component = fixture.componentInstance;
    component.movie = new Movie(1, "testTitle", "testTagline", 5.6, 1000,
      "2020-06-06", "https://image.tmdb.org/t/p/w500/3kcEGnYBHDeqmdYf8ZRbKdfmlUy.jpg", "testOverview", 6000, 10000, ["g1", "g2"],
      120);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
