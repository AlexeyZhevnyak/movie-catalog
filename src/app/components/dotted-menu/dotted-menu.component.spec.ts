import {ComponentFixture, TestBed} from '@angular/core/testing';

import {DottedMenuComponent} from './dotted-menu.component';

describe('DottedMenuComponent', () => {
  let component: DottedMenuComponent;
  let fixture: ComponentFixture<DottedMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DottedMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DottedMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
