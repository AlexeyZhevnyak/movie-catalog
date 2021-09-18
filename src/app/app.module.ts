import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MovieHandlerComponent} from './components/main/movie-handler.component';
import {HttpClientModule} from "@angular/common/http";
import {MoviesService} from "./services/movies/movies.service";
import {MovieCardComponent} from './components/film-card/movie-card.component';
import {FindMovieComponent} from './components/header/find-movie.component';
import {FormsModule} from "@angular/forms";
import {FilterSortMenuComponent} from './components/menu/filter-sort-menu.component';
import {MovieDetailsComponent} from './components/movie-details/movie-details.component';

import {MovieCardMenuComponent} from './components/dotted-menu/movie-card-menu.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {HomeComponent} from './components/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    MovieHandlerComponent,
    MovieCardComponent,
    FindMovieComponent,
    FilterSortMenuComponent,
    MovieDetailsComponent,
    MovieCardMenuComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
