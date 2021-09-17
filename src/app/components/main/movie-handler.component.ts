import {Component, OnInit} from '@angular/core';
import {MoviesService} from "../../services/movies/movies.service";
import {Movie} from "../../model/movie/movie";
import {FindMovieService} from "../../services/findMovie/find-movie.service";
import {GenresHolderService} from "../../services/genres/genres-holder.service";
import {SortService} from "../../services/sortFunctions/sort.service";
import {HeaderSwapService} from "../../services/condition/header-swap.service";
import {MovieDetailsService} from "../../services/movieDetails/movie-details.service";

@Component({
  selector: 'app-movie-cards',
  templateUrl: './movie-handler.component.html',
  styleUrls: ['./movie-handler.component.scss']
})
export class MovieHandlerComponent implements OnInit {
  public movies: Movie[] = [];
  public moviesToShow: Movie[] = [];

  constructor(private moviesService: MoviesService, private findService: FindMovieService, public genreHolder: GenresHolderService, public sortService: SortService,
              private headerSwap: HeaderSwapService, private movieDetails: MovieDetailsService) {
  }

  ngOnInit(): void {
    this.moviesService.moviesDtoObs
      .subscribe(value => {
        this.movies = value.data.map(element => {
          element.release_date = new Date(element.release_date).getTime();
          return element;
        });
        this.moviesToShow = this.movies;
      });

    this.findService.findedMovieTitle$.subscribe(movieTitle => {
      this.moviesToShow = this.moviesToShow.filter(e => e.title === movieTitle);
    });

  }

  filterMovies(filter: string): void {
    if (filter === "All") {
      this.moviesToShow = this.movies;
      return
    }
    this.moviesToShow = this.movies.filter(e => e.genres.indexOf(filter) >= 0);
  }

  sortMovies(field: string) {
    this.moviesToShow.sort((a: any, b: any) => a[field] - b[field]);
  }

  sendMovieDetailsToHeader(movie: Movie) {
    this.movieDetails.movieDetailsSubject$.next(movie);
  }

  swapHeader() {
    this.headerSwap.swapHeaderCondition$.next(false);
  }
}
