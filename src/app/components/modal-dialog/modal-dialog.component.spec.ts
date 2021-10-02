import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ModalDialogComponent} from './modal-dialog.component';

describe('ModalDialogComponent', () => {
  let component: ModalDialogComponent;
  let fixture: ComponentFixture<ModalDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalDialogComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDialogComponent);
    component = fixture.componentInstance;
    component.message = "testMessage";
    component.title = "testTitle";
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('values test', () => {
    const nativeElement = fixture.nativeElement;
    const title = nativeElement.querySelector('h1');
    const message = nativeElement.querySelector('p');
    expect(title.textContent).toBe("testTitle");
    expect(message.textContent).toBe("testMessage");
  })
});
