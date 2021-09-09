import {Component, OnInit} from '@angular/core';
import {MoviesService} from "../../services/movies/movies.service";
import {Movie} from "../../model/movie/movie";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public movies: Movie[] = [];

  constructor(private moviesService: MoviesService) {

  }

  ngOnInit(): void {
    this.moviesService.moviesDtoObs
      .subscribe(value => this.movies = value.data);
  }

}
