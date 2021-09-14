import {Component, OnInit} from '@angular/core';
import {Movie} from "../../model/movie/movie";
import {MovieDetailsService} from "../../services/movieDetails/movie-details.service";
import {ConditionService} from "../../services/condition/condition.service";

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  public movie !: Movie;

  constructor(private movieDetService: MovieDetailsService, private condition : ConditionService) {
    this.movieDetService.subscribe(
      (m: Movie) => this.movie = m
    )
  }

  ngOnInit(): void {

  }

  changeCondition() {
    this.condition.emit(true);
  }
}
