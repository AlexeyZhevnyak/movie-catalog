import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {GenresHolderService} from "../../services/genres/genres-holder.service";
import {SortService} from "../../services/sortFunctions/sort.service";
import {ISelected} from "../../services/sortFunctions/iselected";
import {Movie} from "../../model/movie/movie";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  public genres: string[] = [];
  @Output() filterEmitter = new EventEmitter<string>();
  @Output() sortFieldEmitter = new EventEmitter<(a: Movie, b: Movie) => number>();
  public sortFunctions: ISelected[] = [];
  public sortFunction!: (a: Movie, b: Movie) => number;


  constructor(private genreHolder: GenresHolderService, private sortService: SortService) {
  }

  ngOnInit(): void {
    this.genres = this.genreHolder.genres;
    this.sortFunctions = this.sortService.sortFields;
    this.sortFunction = this.sortFunctions[0].value;
    this.sortFieldEmitter.emit(this.sortFunction);
    console.log(this.sortFunction)
  }

  sendGenre(genre: string) {
    this.filterEmitter.emit(genre);
  }

  sendSortFunction(sortFunction: (a: Movie, b: Movie) => number) {
    this.sortFieldEmitter.emit(sortFunction);
  }
}
