import {Component} from '@angular/core';
import {HeaderSwapService} from "./services/condition/header-swap.service";

import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'movie-catalog';
  // condition: boolean = true;
  condition !: Observable<boolean>

  constructor(public condService: HeaderSwapService) {
    // this.condService.emit(true);
    // this.condService.condition$.next(true)

  }



}
