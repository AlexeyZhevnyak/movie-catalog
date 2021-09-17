import {Injectable} from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FindMovieService {
  public findedMovieTitle$ = new Subject<string>();

  constructor() {
  }
}
