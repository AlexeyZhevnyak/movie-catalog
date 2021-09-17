import {ComponentFixture, TestBed} from '@angular/core/testing';

import {FilterSortMenuComponent} from './filter-sort-menu.component';

describe('MenuComponent', () => {
  let component: FilterSortMenuComponent;
  let fixture: ComponentFixture<FilterSortMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FilterSortMenuComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterSortMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
