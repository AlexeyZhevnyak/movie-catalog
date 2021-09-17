import {Component} from '@angular/core';
import {MovieDetailsService} from "../../services/movieDetails/movie-details.service";
import {HeaderSwapService} from "../../services/condition/header-swap.service";

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent {

  constructor(public movieDetService: MovieDetailsService, private condition: HeaderSwapService) {
  }



  swapToFindMovie() {
    this.condition.swapHeaderCondition$.next(true);
  }
}
