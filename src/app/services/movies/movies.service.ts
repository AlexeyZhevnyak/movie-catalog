import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MoviesDto} from "../../model/movies-dto";
import {Movie} from "../../model/movie/movie";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private readonly _moviesDtoObs : Observable<MoviesDto> = new Observable();

  constructor(private http: HttpClient) {
    this._moviesDtoObs = this.http.get<MoviesDto>("http://localhost:4000/movies");
  }


  get moviesDtoObs(): Observable<MoviesDto> {
    return this._moviesDtoObs;
  }

}
