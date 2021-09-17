import {Component, Input} from '@angular/core';
import {Movie} from "../../model/movie/movie";
import {MovieDetailsService} from "../../services/movieDetails/movie-details.service";
import {HeaderSwapService} from "../../services/condition/header-swap.service";

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent {

  @Input() public movie!: Movie;

  constructor(private movieDetService: MovieDetailsService, private condService: HeaderSwapService) {
  }

  sendMovieDetailsForHeader() {
    this.condService.swapHeaderCondition$.next(false);
    this.movieDetService.movieDetailsSubject$.next(this.movie);
  }
}
