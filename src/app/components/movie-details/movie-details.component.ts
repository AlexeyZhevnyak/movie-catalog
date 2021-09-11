import {Component, OnInit} from '@angular/core';
import {Movie} from "../../model/movie/movie";
import {MovieDetailsService} from "../../services/movieDetails/movie-details.service";

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  public movie !: Movie;

  constructor(private movieDetService: MovieDetailsService) {
    console.log("loikj1");
    this.movieDetService.subscribe(
      (v: Movie) => {
        console.log("loikj3");

        this.movie = v;
        console.log("loikj2")
      }
    )
  }

  ngOnInit(): void {

  }

}
