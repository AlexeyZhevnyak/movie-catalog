import {Component} from '@angular/core';
import {FindMovieService} from "../../services/findMovie/find-movie.service";


@Component({
  selector: 'app-find-movie',
  templateUrl: './find-movie.component.html',
  styleUrls: ['./find-movie.component.scss']
})
export class FindMovieComponent {
  public movieTitle: string = "";


  constructor(private findService: FindMovieService) {
  }


  sendMovieTitle() {
    this.findService.findedMovieTitle$.next(this.movieTitle)
  }

}
