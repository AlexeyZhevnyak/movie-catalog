import {Injectable} from '@angular/core';
import {Subject, Subscription} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ConditionService {
  private subject$ = new Subject();

  constructor() {
  }

  emit(condition: boolean) {
    this.subject$.next(condition);
  }

  subscribe(action: any): Subscription {
    return this.subject$.subscribe(action);
  }
}
