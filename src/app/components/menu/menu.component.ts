import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {GenresHolderService} from "../../services/genres/genres-holder.service";
import {SortService} from "../../services/sortFunctions/sort.service";
import {ISelected} from "../../services/sortFunctions/iselected";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  public genres: string[] = [];
  @Output() filterEmitter = new EventEmitter<string>();
  @Output() sortFieldEmitter = new EventEmitter<string>();
  public sortFields: ISelected[] = [];
  public sortField!: string;

  constructor(private genreHolder: GenresHolderService, private sortService: SortService) {
  }

  ngOnInit(): void {
    console.log("ahaaha")
    console.log("ahaaha")
    this.genres = this.genreHolder.genres;
    this.sortFields = this.sortService.sortFields;
    this.sortField = this.sortFields[0].field;
  }

  sendGenre(genre: string) {
    this.filterEmitter.emit(genre);
  }

  sendSortFunction(sortField: string) {
    this.sortFieldEmitter.emit(sortField);
  }
}
