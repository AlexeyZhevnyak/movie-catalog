import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-dotted-menu',
  templateUrl: './dotted-menu.component.html',
  styleUrls: ['./dotted-menu.component.scss']
})
export class DottedMenuComponent implements OnInit {
  @ViewChild("header_burger") header_burger !: ElementRef;

  @ViewChild("header_menu") header_menu !: ElementRef;
  @ViewChild("header") header !: ElementRef;
  @ViewChild("wrapper") wrapper !: ElementRef;
  isMark: boolean = false;

  constructor() {
  }

  ngOnInit(): void {

  }

  change() {
    if (!this.isMark) {
      this.header_menu.nativeElement.style.display = 'block';
      this.header.nativeElement.style.justifyContent = 'flex-end';
      this.header_burger.nativeElement.classList.toggle('active');
      this.isMark = true;
    } else {
      this.mouseOut();
      this.isMark = false;
    }

  }

  mouseOut() {
    this.header_menu.nativeElement.style.display = 'none';
    this.header_burger.nativeElement.style.display = 'block'
    console.log("out")
    this.header_burger.nativeElement.classList.remove('active')
  }
}