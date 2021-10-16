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
    component.options = [
      {
        title: "Votes",
        field: "vote_average"
      },
      {
        title: "Release date",
        field: "release_date"
      },
      {
        title: "Budget",
        field: "budget"
      },
      {
        title: "Revenue",
        field: "revenue"
      },
      {
        title: "Runtime",
        field: "runtime"
      }
    ]
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("checking the correctness of filter", () => {
    component.sendFilter("testFilter");
    component.filterEmitter.subscribe(e => expect(e).toEqual("testFilter"));
  })

  it("checking the correctness of selected option", () => {
    component.sendSelectOption("runtime");
    component.selectViewEmitter.subscribe(e => expect(e).toEqual("runtime"))
  })
})
