import {Injectable} from '@angular/core';
import {ISelected} from "./iselected";
import {Movie} from "../../model/movie/movie";


@Injectable({
  providedIn: 'root'
})
export class SortService {
  private _sortFields : ISelected[] = [
    {
      title: "Votes",
      value: (a: Movie, b: Movie): number => a.vote_average - b.vote_average
    },
    {
      title: "Release date",
      value: (a: Movie, b: Movie): number => {
        if (a.release_date > b.release_date) {
          return 1;
        } else if (a.release_date < b.release_date) {
          return -1;
        } else
          return 0;
      }
    },
    {
      title: "Budget",
      value: (a: Movie, b: Movie): number => a.budget - b.budget
    },
    {
      title: "Revenue",
      value: (a: Movie, b: Movie): number => a.revenue - b.revenue
    },
    {
      title: "Runtime",
      value: (a: Movie, b: Movie): number => a.runtime - b.runtime
    }
  ];


  get sortFields(): ISelected[] {
    return this._sortFields;
  }

  constructor() {
  }
}
