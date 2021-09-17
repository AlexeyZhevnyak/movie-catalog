import {Component, Input, OnInit} from '@angular/core';
import {Movie} from "../../model/movie/movie";
import {MovieDetailsService} from "../../services/movieDetails/movie-details.service";
import {HeaderSwapService} from "../../services/condition/header-swap.service";

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {

  @Input() public movie!: Movie;

  constructor(private movieDetService: MovieDetailsService, private condService: HeaderSwapService) {
  }

  ngOnInit(): void {
  }

  sendMovieDetailsForHeader() {
    this.condService.swapCondition$.next(false);
    this.movieDetService.movieDetailsSubject$.next(this.movie);
  }
}
