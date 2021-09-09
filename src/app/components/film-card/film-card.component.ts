import {Component, Input, OnInit} from '@angular/core';
import {Movie} from "../../model/movie/movie";

@Component({
  selector: 'app-film-card',
  templateUrl: './film-card.component.html',
  styleUrls: ['./film-card.component.scss']
})
export class FilmCardComponent implements OnInit {

  @Input() public movie!: Movie;

  constructor() {
  }

  ngOnInit(): void {
  }

}
