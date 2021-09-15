import {Component, OnInit} from '@angular/core';
import {GenresHolderService} from "../../services/genres/genres-holder.service";
import {Movie} from "../../model/movie/movie";
import {MoviesService} from "../../services/movies/movies.service";

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss']
})
export class AddMovieComponent implements OnInit {
  public movie !: Movie;
  public genres: string[] = this.genresService.genres;
  selected: string[] = [];
  title: string = ' ';
  release_date!: Date;
  poster_path: string = '';
  overview: string = '';
  runtime: number = 0;
  obj: any = {
    "title": "",
    "genres": [],
    "runtime": null,
    "overview": "",
    "poster_path": "",
    "release_date": "",

    "tagline": "aa",
    "vote_average": 0,
    "vote_count": 0,

    "budget": 150000000,
    "revenue": 287594577,

  }

  constructor(private genresService: GenresHolderService, private movSer: MoviesService) {
  }

  ngOnInit(): void {

  }

  getGenres(): String[] {

    return this.genres;
  }

  ter() {

  }

  subm() {
    console.log("tewe");
    this.obj.runtime = Number(this.obj.runtime);
    this.movSer.addMovie(this.obj).subscribe(
      e => console.log(e)
    )
  }
}
