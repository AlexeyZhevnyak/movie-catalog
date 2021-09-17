import {Component} from '@angular/core';
import {Movie} from "../../model/movie/movie";
import {MovieDetailsService} from "../../services/movieDetails/movie-details.service";
import {HeaderSwapService} from "../../services/condition/header-swap.service";

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent {
  public movie !: Movie;

  constructor(public movieDetService: MovieDetailsService, private condition: HeaderSwapService) {
    // this.movieDetService.subscribe(
    //   (m: Movie) => this.movie = m
    // )
  }



  changeCondition() {
    this.condition.swapHeaderCondition$.next(true);
  }
}
