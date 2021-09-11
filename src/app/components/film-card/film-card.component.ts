import {Component, Input, OnInit} from '@angular/core';
import {Movie} from "../../model/movie/movie";
import {MovieDetailsService} from "../../services/movieDetails/movie-details.service";
import {ConditionService} from "../../services/condition/condition.service";

@Component({
  selector: 'app-film-card',
  templateUrl: './film-card.component.html',
  styleUrls: ['./film-card.component.scss']
})
export class FilmCardComponent implements OnInit {

  @Input() public movie!: Movie;

  constructor(private movieDetService: MovieDetailsService, private condService: ConditionService) {
  }

  ngOnInit(): void {
  }

  sendMovieDetails() {
    this.condService.emit(false);
    setTimeout(() => this.movieDetService.emit(this.movie), 0)

  }
}
