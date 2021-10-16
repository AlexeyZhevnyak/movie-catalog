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
  // public movies: Movie[] = [];
  public isDialogVisible: boolean = false;
  public clickedMovie !: Movie;

  constructor(public moviesService: MoviesService, private findService: FindMovieService, public genreHolder: GenresHolderService, public sortService: SortService,
              private headerSwap: HeaderSwapService, private movieDetails: MovieDetailsService) {
  }

  ngOnInit(): void {
    this.findService.findedMovieTitle$.subscribe(movieTitle => {
      this.moviesService.findMovie(movieTitle);
    });

  }

  filterMovies(filter: string): void {
    this.moviesService.filterMovies(filter);
  }

  sortMovies(field: keyof Movie) {
    this.moviesService.sortMovies(field);
  }

  sendMovieDetailsToHeader(movie: Movie) {
    this.movieDetails.movieDetailsSubject$.next(movie);
  }

  swapHeader() {
    this.headerSwap.swapHeaderCondition$.next(false);
  }

  handleConfirm(decision: boolean) {
    if (decision)
      this.moviesService.deleteMovie(this.clickedMovie);
    this.isDialogVisible = false

  }

  showDialog(decision: boolean) {
    this.isDialogVisible = decision;
  }

  handleMovie(movie: Movie) {
    this.sendMovieDetailsToHeader(movie);
    this.clickedMovie = movie;
  }
}
