import {Injectable} from '@angular/core';
import {ISelected} from "./iselected";


@Injectable({
  providedIn: 'root'
})
export class SortService {
  public sortFields: ISelected[] = [
    {
      title: "Votes",
      field: "vote_average"
    },
    {
      title: "Release date",
      field: "release_date"
    },
    {
      title: "Budget",
      field: "budget"
    },
    {
      title: "Revenue",
      field: "revenue"
    },
    {
      title: "Runtime",
      field: "runtime"
    }
  ];


  constructor() {
  }
}
