import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ModalDialogComponent} from './modal-dialog.component';
import {By} from "@angular/platform-browser";
import {DebugElement} from "@angular/core";

describe('ModalDialogComponent', () => {
  let component: ModalDialogComponent;
  let fixture: ComponentFixture<ModalDialogComponent>;
  let buttonsElement: DebugElement;
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
    buttonsElement = fixture.debugElement.query(By.css(".buttons"));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('check the correctness of title and message', () => {
    const nativeElement = fixture.nativeElement;
    const title = nativeElement.querySelector('h1');
    const message = nativeElement.querySelector('p');
    expect(title.textContent).toBe("testTitle");
    expect(message.textContent).toBe("testMessage");
  })
  it('sendDecision() should send false', () => {
    spyOn(component, "sendDecision").and.callThrough();
    buttonsElement.children[0].triggerEventHandler('click', null);
    expect(component.sendDecision).toHaveBeenCalledWith(false);
  });

  it('sendDecision() should send true', () => {
    spyOn(component, "sendDecision").and.callThrough();
    buttonsElement.children[1].triggerEventHandler('click', null);
    expect(component.sendDecision).toHaveBeenCalledWith(true);
  });
});
