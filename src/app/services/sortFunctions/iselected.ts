import {Movie} from "../../model/movie/movie";

export interface ISelected {
  title: string;
  value: (a: Movie, b: Movie) => number;
}

