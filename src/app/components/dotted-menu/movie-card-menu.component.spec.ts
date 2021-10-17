import {ComponentFixture, TestBed} from '@angular/core/testing';

import {MovieCardMenuComponent} from './movie-card-menu.component';
import {Movie} from "../../model/movie/movie";
import {By} from "@angular/platform-browser";
import {first} from "rxjs/operators";
import {HomeComponent} from "../home/home.component";

describe('DottedMenuComponent', () => {
  let component: MovieCardMenuComponent;
  let fixture: ComponentFixture<MovieCardMenuComponent>;
  let deleteMenuItem: any;
  let homeComponent: HomeComponent;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MovieCardMenuComponent, HomeComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieCardMenuComponent);
    homeComponent = TestBed.createComponent(HomeComponent).componentInstance;
    component = fixture.componentInstance;
    component.movie = new Movie(1, "testTitle", "testTagline", 5.6, 1000,
      "2020-06-06", "https://image.tmdb.org/t/p/w500/3kcEGnYBHDeqmdYf8ZRbKdfmlUy.jpg", "testOverview", 6000, 10000, ["g1", "g2"],
      120);
    deleteMenuItem = fixture.debugElement.query(By.css('.header-elemD'));
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
  it('hide menu test', () => {
    component.mouseOut();
    component.isMark = false;
    expect(component.headerMenu.nativeElement.style.display).toBe('none');
    expect(component.headerBurger.nativeElement.style.display).toBe('block');
  });

  it("true should be send after click on delete menu item", () => {
    let value!: boolean;
    spyOn(component, "sendDeleteClick").and.callThrough();
    component.deleteClickEmitter.pipe(first())
      .subscribe(e => value = e);
    deleteMenuItem.triggerEventHandler('click', null);


    expect(component.sendDeleteClick).toHaveBeenCalled();
    expect(value).toBe(true);
    // expect()
  })
});
