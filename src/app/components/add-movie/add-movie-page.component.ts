import {Component, ElementRef, ViewChild} from '@angular/core';
import {GenresHolderService} from "../../services/genres/genres-holder.service";
import {MoviesService} from "../../services/movies/movies.service";
import {AddMovieDTO} from "../../model/add-movie-dto";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie-page.component.html',
  styleUrls: ['./add-movie-page.component.scss']
})
export class AddMoviePageComponent {
  @ViewChild("addForm") addForm!: ElementRef;

  public movieForAdd: AddMovieDTO = {
    budget: 0,
    genres: [],
    overview: "",
    poster_path: "",
    release_date: "",
    revenue: 0,
    runtime: 0,
    tagline: "",
    title: "",
    vote_average: 0,
    vote_count: 0
  };

  constructor(public genresService: GenresHolderService, private movSer: MoviesService, private router: Router) {
  }


  submit() {
    this.movieForAdd.runtime = Number(this.movieForAdd.runtime);
    this.movieForAdd.vote_average = Number(this.movieForAdd.vote_average);
    this.movieForAdd.vote_count = Number(this.movieForAdd.vote_count);
    this.movieForAdd.revenue = Number(this.movieForAdd.revenue);
    this.movSer.addMovie(this.movieForAdd).subscribe(e =>
      console.log(e));
    window.location.replace("/");

  }

  clearAll() {
    this.addForm.nativeElement.reset();
  }
}
