import {Movie} from "./movie/movie";

export interface MoviesDto {
  totalAmount : number;
  data : Movie[];
  offset : number;
  limit : number
}
