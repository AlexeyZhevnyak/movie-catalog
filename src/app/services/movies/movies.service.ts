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
    obs.subscribe(e => this.movies = e.data)
  }

  get moviesObs(): Observable<Movie[]> {
    return new Observable<Movie[]>(e => e.next(this.movies));
  }

  sortMovies(field: string): void {
    if (field === "release_date") {
      this.movies.sort((a: any, b: any) => new Date(a[field]).getTime() - new Date(b[field]).getTime())
      return;
    }
    this.movies.sort((a: any, b: any) => a[field] - b[field]);
  }

  filterMovies(filter: string): void {
    this.movieDTOObs.subscribe(e => {
      this.movies = e.data;
      if (filter !== "All")
        this.movies = this.movies.filter(e => e.genres.indexOf(filter) >= 0);
    })
  }

  findMovie(title: string) {
    this.movies = this.movies.filter(e => e.title === title);
  }

  deleteMovie(movie: Movie) {
    this.http.delete("http://localhost:4000/movies/" + movie.id).subscribe(
      e => console.log(e)
    );
    this.movies.splice(this.movies.indexOf(movie), 1)
  }
}
