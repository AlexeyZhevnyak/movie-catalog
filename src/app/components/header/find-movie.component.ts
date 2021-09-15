import {Component, OnInit} from '@angular/core';
import {FindMovieService} from "../../services/findMovie/find-movie.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-find-movie',
  templateUrl: './find-movie.component.html',
  styleUrls: ['./find-movie.component.scss']
})
export class FindMovieComponent implements OnInit {
  public movieTitle: string = "";


  constructor(private findService : FindMovieService, private rout : Router) { }

  ngOnInit(): void {
  }

  sendMovieTitle() {
    this.findService.emit(this.movieTitle)
  }

  redirectToAddMoviePage() {
    // this.rout.
  }

  test() {
    console.log("click");
  }
}
