import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SelectOptions} from "../../services/sortFunctions/selectOptions";
import {Movie} from "../../model/movie/movie";

@Component({
  selector: 'app-filter-sort-menu',
  templateUrl: './filter-sort-menu.component.html',
  styleUrls: ['./filter-sort-menu.component.scss']
})
export class FilterSortMenuComponent implements OnInit {
  @Input() filters: string[] = [];
  @Input() options: SelectOptions[] = [];
  @Output() filterEmitter = new EventEmitter<string>();
  @Output() selectViewEmitter = new EventEmitter<keyof Movie>();
  public sortField!: keyof Movie;

  constructor() {
  }

  ngOnInit(): void {
    this.sortField = this.options[0].field;
  }

  sendFilter(filter: string) {
    this.filterEmitter.emit(filter);
  }

  sendSelectOption(selectOption: keyof Movie) {
    this.selectViewEmitter.emit(selectOption);
  }
}
