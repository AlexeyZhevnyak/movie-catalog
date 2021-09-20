import {Component, OnInit} from '@angular/core';
import {MoviesService} from "../../services/movies/movies.service";
import {Movie} from "../../model/movie/movie";
import {FindMovieService} from "../../services/findMovie/find-movie.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public movies: Movie[] = [];
  public moviesToShow: Movie[] = [];

  constructor(private moviesService: MoviesService, private findService: FindMovieService) {
  }

  ngOnInit(): void {
    this.moviesService.moviesDtoObs
      .subscribe(value => {
        this.movies = value.data;
        this.moviesToShow = this.movies;
      });

    this.findService.subscribe((movie: string) => {
      this.moviesToShow = this.moviesToShow.filter(e => e.title === movie);
    });

  }

  filterMovies(event: string): void {
    if (event === "All") {
      this.moviesToShow = this.movies;
      return
    }
    this.moviesToShow = this.movies.filter(e => e.genres.indexOf(event) >= 0);
  }

  sortMovies(event: (a: Movie, b: Movie) => number) {
    console.log(event);
    this.moviesToShow.sort(event);
  }
}
