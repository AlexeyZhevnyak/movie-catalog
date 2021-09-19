import {Movie} from "../../model/movie/movie";

export interface SelectOptions {
  title: string;
  field: keyof Movie;
}

