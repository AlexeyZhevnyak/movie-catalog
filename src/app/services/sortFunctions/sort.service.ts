import {Injectable} from '@angular/core';
import {SelectOptions} from "./selectOptions";


@Injectable({
  providedIn: 'root'
})
export class SortService {
  public sortFields: SelectOptions[] = [
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
