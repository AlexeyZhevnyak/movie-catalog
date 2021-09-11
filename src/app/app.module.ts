import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MainComponent} from './components/main/main.component';
import {HttpClientModule} from "@angular/common/http";
import {MoviesService} from "./services/movies/movies.service";
import {FilmCardComponent} from './components/film-card/film-card.component';
import {FindMovieComponent} from './components/header/find-movie.component';
import {FormsModule} from "@angular/forms";
import {MenuComponent} from './components/menu/menu.component';
import {MovieDetailsComponent} from './components/movie-details/movie-details.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    FilmCardComponent,
    FindMovieComponent,
    MenuComponent,
    MovieDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
