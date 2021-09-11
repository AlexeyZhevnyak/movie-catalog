import {Injectable} from '@angular/core';
import {Subject, Subscription} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FindMovieService {
  private subject$ = new Subject();

  constructor() {
  }

  emit(movieTitle: string) {
    this.subject$.next(movieTitle);
  }

  subscribe(action: any): Subscription {
    return this.subject$.subscribe(action);
  }
}
