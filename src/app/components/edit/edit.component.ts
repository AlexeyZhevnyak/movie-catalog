import {Component, OnInit} from '@angular/core';
import {Movie} from "../../model/movie/movie";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  public movie!: Movie;

  constructor(public activateRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(params => {
      this.movie = JSON.parse(params['movie']);
    })
  }

}
