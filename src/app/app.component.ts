import {Component, OnInit} from '@angular/core';
import {ConditionService} from "./services/condition/condition.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'movie-catalog';
  condition: boolean = true;


  constructor(private condService: ConditionService) {
  }

  ngOnInit(): void {
    this.condService.subscribe((e: boolean) => this.condition = e);
  }

}
