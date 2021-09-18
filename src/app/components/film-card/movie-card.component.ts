import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Movie} from "../../model/movie/movie";

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent {
  @Input() movie!: Movie;
  @Output() movieEmitter = new EventEmitter<Movie>();
  @Output() showDeleteEmitter = new EventEmitter<boolean>();

  constructor() {
  }

  sendMovie() {
    this.movieEmitter.emit(this.movie);
  }

  sendSignToShowDialog(decision: boolean) {
    this.showDeleteEmitter.emit(decision);
  }
}
