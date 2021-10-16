import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MoviesDto} from "../../model/movies-dto";
import {Observable} from "rxjs";
import {Movie} from "../../model/movie/movie";
import {AddMovieDTO} from "../../model/add-movie-dto";


@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private movieDTOObs!: Observable<MoviesDto>;
  private _movies: Movie[] = [];

  constructor(private http: HttpClient) {
    this.movieDTOObs = this.http.get<MoviesDto>("http://localhost:4000/movies?limit=11");
    this.movieDTOObs.subscribe(e => this._movies = e.data)

  }

  get moviesObs(): Observable<Movie[]> {
    return new Observable<Movie[]>(e => e.next(this._movies));
  }


  set movies(value: Movie[]) {
    this._movies = value;
  }

  sortMovies(field: keyof Movie): void {
    if (field === "release_date") {
      this._movies.sort((a: Movie, b: Movie) => new Date(a[field]).getTime() - new Date(b[field]).getTime())
      return;
    }
    this._movies.sort((a: Movie, b: Movie) => Number(a[field]) - Number(b[field]))
  }

  addMovie(movie: AddMovieDTO): Observable<Object> {
    return this.http.post("http://localhost:4000/movies", movie);
  }

  filterMovies(filter: string): void {
    this.movieDTOObs.subscribe(e => {
      this._movies = e.data;
      if (filter !== "All")
        this._movies = this._movies.filter(e => e.genres.indexOf(filter) >= 0);
    })
  }

  findMovie(title: string) {
    this._movies = this._movies.filter(e => e.title === title);
  }

  deleteMovie(movie: Movie) {
    this.http.delete("http://localhost:4000/movies/" + movie.id).subscribe(
      e => console.log(e)
    );
    this._movies.splice(this._movies.indexOf(movie), 1)
  }

  editMovie(movie: Movie) {
    this.http.put("http://localhost:4000/movies", movie).subscribe(
      e => console.log(e)
    )
    const movieIndex = this._movies.findIndex((m) => m.id === movie.id)
    this._movies[movieIndex] = movie;
  }
}
