import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HeaderSwapService {
  public swapHeaderCondition$ = new BehaviorSubject<boolean>(true);

  constructor() {
  }
}
