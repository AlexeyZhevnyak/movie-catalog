import {Component, OnInit} from '@angular/core';
import {ConditionService} from "../../services/condition/condition.service";

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss']
})
export class WrapperComponent implements OnInit {
  title = 'movie-catalog';
  condition: boolean = true;

  constructor(private condService: ConditionService) {
  }

  ngOnInit(): void {
    this.condService.subscribe((e: boolean) => this.condition = e);
  }

}
