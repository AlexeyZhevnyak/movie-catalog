import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Movie} from "../../model/movie/movie";
import {ActivatedRoute} from "@angular/router";
import {GenresHolderService} from "../../services/genres/genres-holder.service";
import {MoviesService} from "../../services/movies/movies.service";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  public movie!: Movie;
  @ViewChild("editForm") editForm !: ElementRef;


  constructor(private activateRoute: ActivatedRoute, public genresService: GenresHolderService, private movSer: MoviesService) {
  }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(params => {
      this.movie = JSON.parse(params['movie']);
    })
  }

  submit() {
    this.movSer.editMovie(this.movie);
    // window.location.reload();
  }

  clearAll() {
    this.editForm.nativeElement.reset();
  }

}
