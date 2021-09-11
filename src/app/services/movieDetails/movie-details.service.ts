import {Injectable} from '@angular/core';
import {Subject, Subscription} from "rxjs";
import {Movie} from "../../model/movie/movie";

@Injectable({
  providedIn: 'root'
})
export class MovieDetailsService {
  private subject$ = new Subject();

  constructor() {
  }

  emit(movie: Movie) {
    this.subject$.next(movie);
  }

  subscribe(action: any): Subscription {
    return this.subject$.subscribe(action);
  }
}
