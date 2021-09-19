import {Injectable} from '@angular/core';
import {ReplaySubject} from "rxjs";
import {Movie} from "../../model/movie/movie";

@Injectable({
  providedIn: 'root'
})
export class MovieDetailsService {
  public movieDetailsSubject$ = new ReplaySubject<Movie>(1);

  constructor() {
  }
}
