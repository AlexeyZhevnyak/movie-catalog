import {Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-movie-card-menu',
  templateUrl: './movie-card-menu.component.html',
  styleUrls: ['./movie-card-menu.component.scss']
})
export class MovieCardMenuComponent {
  @ViewChild("headerBurger") headerBurger !: ElementRef;
  @ViewChild("headerMenu") headerMenu !: ElementRef;
  @ViewChild("header") header !: ElementRef;
  @ViewChild("wrapper") wrapper !: ElementRef;
  isMark: boolean = false;
  @Output() deleteClickEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {
  }


  change() {
    if (!this.isMark) {
      this.headerMenu.nativeElement.style.display = 'block';
      this.header.nativeElement.style.justifyContent = 'flex-end';
      this.headerBurger.nativeElement.classList.toggle('active');
      this.isMark = true;
    } else {
      this.mouseOut();
      this.isMark = false;
    }

  }

  mouseOut() {
    this.headerMenu.nativeElement.style.display = 'none';
    this.headerBurger.nativeElement.style.display = 'block'
    this.headerBurger.nativeElement.classList.remove('active')
  }

  sendDeleteClick() {
    this.deleteClickEmitter.emit(true);
  }
}
