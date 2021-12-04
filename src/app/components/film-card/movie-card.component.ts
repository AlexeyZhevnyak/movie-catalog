import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Movie} from "../../model/movie/movie";
import {HeaderSwapService} from "../../services/condition/header-swap.service";

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent {
  @Input() movie!: Movie;
  @Output() movieEmitter = new EventEmitter<Movie>();
  @Output() showDeleteEmitter = new EventEmitter<boolean>();

  constructor(private headerSwap: HeaderSwapService) {
  }

  sendMovie() {
    this.movieEmitter.emit(this.movie);
  }

  sendSignToShowDialog(decision: boolean) {
    this.showDeleteEmitter.emit(decision);
  }

  swapHeader() {
    var elementById = document.getElementById('start');
    if (elementById !== null)
      elementById.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"})
    this.headerSwap.swapHeaderCondition$.next(false);
  }
}
