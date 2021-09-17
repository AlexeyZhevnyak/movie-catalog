import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GenresHolderService {
  public genres: string[] = [
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

}
