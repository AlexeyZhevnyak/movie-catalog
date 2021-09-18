import {Component} from '@angular/core';
import {HeaderSwapService} from "../../services/condition/header-swap.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(public condService: HeaderSwapService) {
  }


}
