import {ComponentFixture, TestBed} from '@angular/core/testing';

import {FilterSortMenuComponent} from './filter-sort-menu.component';
import {first} from "rxjs/operators";
import {By} from "@angular/platform-browser";
import {DebugElement} from "@angular/core";

describe('MenuComponent', () => {
  let component: FilterSortMenuComponent;
  let fixture: ComponentFixture<FilterSortMenuComponent>;
  let selectElement: any;
  let filterElement: DebugElement;
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
    ];

    component.filters = [
      "All",
      "Drama",
      "Romance",
      "Animation",
      "Adventure",
      "Family",
      "Comedy",
      "Fantasy",
      "Science Fiction",
      "Action"
    ]
    selectElement = fixture.debugElement.query(By.css("select"));
    filterElement = fixture.debugElement.query(By.css(".genres"));
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("checking the correctness of selected option(vote_average)", () => {
    spyOn(component, "sendSelectOption").and.callThrough();
    selectElement.triggerEventHandler('click', null);
    expect(component.sendSelectOption).toHaveBeenCalledWith("vote_average");
  })

  it("checking the correctness of filter (All)", () => {
    let value !: string;
    spyOn(component, "sendFilter").and.callThrough();
    component.filterEmitter.pipe(first())
      .subscribe(e => value = e)
    filterElement.children[0].triggerEventHandler('click', null);
    expect(component.sendFilter).toHaveBeenCalled();
    expect(value).toEqual('All');
  })
})
