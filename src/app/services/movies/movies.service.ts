import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MoviesDto} from "../../model/movies-dto";
import {Observable} from "rxjs";
import {Movie} from "../../model/movie/movie";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private movieDTOObs!: Observable<MoviesDto>;
  private movies: Movie[] = [];

  constructor(private http: HttpClient) {
    this.movieDTOObs = this.http.get<MoviesDto>("http://localhost:4000/movies?limit=11");
    this.refreshMovies(this.movieDTOObs);

  }

  private refreshMovies(obs: Observable<MoviesDto>) {
    obs.subscribe(e => this.movies = e.data.map(
      element => {
        element.release_date = new Date(element.release_date).getTime();
        return element;
      }))
  }

  get moviesObs(): Observable<Movie[]> {
    return new Observable<Movie[]>(e => e.next(this.movies));
  }

  sortMovies(field: string): void {
    this.movies.sort((a: any, b: any) => a[field] - b[field])
  }

  filterMovies(filter: string): void {
    this.movieDTOObs.subscribe(e => {
      this.movies = e.data
        .map(
          element => {
            element.release_date = new Date(element.release_date).getTime();
            return element;
          });
      if (filter !== "All")
        this.movies = this.movies.filter(e => e.genres.indexOf(filter) >= 0);
    })
  }

  findMovie(title: string) {
    this.movies = this.movies.filter(e => e.title === title);
  }
}
