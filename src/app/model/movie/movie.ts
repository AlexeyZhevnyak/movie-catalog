export class Movie {
  private _id: number;
  private _title: string;
  private _tagline: string;
  private _vote_average: number;
  private _vote_count: number;
  private _release_date: Date;
  private _poster_path: string;
  private _overview: string;
  private _budget: number;
  private _revenue: number;
  private _genres: string[];
  private _runtme: number;


  constructor(id: number, title: string, tagline: string, vote_average: number, vote_count: number, release_date: Date, poster_path: string, overview: string, budget: number, revenue: number, genres: string[], runtme: number) {
    this._id = id;
    this._title = title;
    this._tagline = tagline;
    this._vote_average = vote_average;
    this._vote_count = vote_count;
    this._release_date = release_date;
    this._poster_path = poster_path;
    this._overview = overview;
    this._budget = budget;
    this._revenue = revenue;
    this._genres = genres;
    this._runtme = runtme;
  }


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get tagline(): string {
    return this._tagline;
  }

  set tagline(value: string) {
    this._tagline = value;
  }

  get vote_average(): number {
    return this._vote_average;
  }

  set vote_average(value: number) {
    this._vote_average = value;
  }

  get vote_count(): number {
    return this._vote_count;
  }

  set vote_count(value: number) {
    this._vote_count = value;
  }

  get release_date(): Date {
    return this._release_date;
  }

  set release_date(value: Date) {
    this._release_date = value;
  }

  get poster_path(): string {
    return this._poster_path;
  }

  set poster_path(value: string) {
    this._poster_path = value;
  }

  get overview(): string {
    return this._overview;
  }

  set overview(value: string) {
    this._overview = value;
  }

  get budget(): number {
    return this._budget;
  }

  set budget(value: number) {
    this._budget = value;
  }

  get revenue(): number {
    return this._revenue;
  }

  set revenue(value: number) {
    this._revenue = value;
  }

  get genres(): string[] {
    return this._genres;
  }

  set genres(value: string[]) {
    this._genres = value;
  }

  get runtme(): number {
    return this._runtme;
  }

  set runtme(value: number) {
    this._runtme = value;
  }
}
