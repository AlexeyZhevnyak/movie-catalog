import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {GenresHolderService} from "../../services/genres/genres-holder.service";
import {MoviesService} from "../../services/movies/movies.service";

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss']
})
export class AddMovieComponent implements OnInit {
  @ViewChild("addForm") addForm!: ElementRef;
  obj: any = {
    "title": "",
    "genres": [],
    "runtime": 0,
    "overview": "",
    "poster_path": "",
    "release_date": "",

    "tagline": "",
    "vote_average": 0,
    "vote_count": 0,

    "budget": 0,
    "revenue": 0,

  }

  constructor(public genresService: GenresHolderService, private movSer: MoviesService) {
  }

  ngOnInit(): void {

  }


  submit() {
    this.obj.runtime = Number(this.obj.runtime);
    this.obj.vote_average = Number(this.obj.vote_average);
    this.obj.vote_count = Number(this.obj.vote_count);
    this.obj.revenue = Number(this.obj.revenue);
    this.movSer.addMovie(this.obj).subscribe(e =>
      console.log(e));
    window.location.reload();
  }

  clearAll() {
    this.addForm.nativeElement.reset();
  }
}
