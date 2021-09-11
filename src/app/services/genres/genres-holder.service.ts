import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GenresHolderService {
  private _genres: string[] = [
    "All",
    "Drama",
    "Romance",
    "Animation",
    "Adventure",
    "Family",
    "Comedy",
    "Fantasy",
    "Science Fiction",
    "Action"
  ]

  constructor() {
  }


  get genres(): string[] {
    return this._genres;
  }
}
