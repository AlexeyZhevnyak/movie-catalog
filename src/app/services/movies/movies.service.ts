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
    this.movieDTOObs.subscribe(e => this.movies = e.data)

  }

  get moviesObs(): Observable<Movie[]> {
    return new Observable<Movie[]>(e => e.next(this.movies));
  }

  sortMovies(field: keyof Movie): void {
    if (field === "release_date") {
      this.movies.sort((a: Movie, b: Movie) => new Date(a[field]).getTime() - new Date(b[field]).getTime())
      return;
    }
    this.movies.sort((a: Movie, b: Movie) => Number(a[field]) - Number(b[field]))
  }

  addMovie(movie: any): Observable<Object> {
    console.log(movie)
    return this.http.post("http://localhost:4000/movies", movie);
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

  editMovie(movie: Movie) {
    this.http.put("http://localhost:4000/movies", movie).subscribe(
      e => console.log(e)
    )
    const movieIndex = this.movies.findIndex((m) => m.id === movie.id)
    this.movies[movieIndex] = movie;
  }
}
