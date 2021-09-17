import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MovieCardsComponent} from './components/main/movie-cards.component';
import {HttpClientModule} from "@angular/common/http";
import {MoviesService} from "./services/movies/movies.service";
import {MovieCardComponent} from './components/film-card/movie-card.component';
import {FindMovieComponent} from './components/header/find-movie.component';
import {FormsModule} from "@angular/forms";
import {MenuComponent} from './components/menu/menu.component';
import {MovieDetailsComponent} from './components/movie-details/movie-details.component';

import {MovieCardMenuComponent} from './components/dotted-menu/movie-card-menu.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    AppComponent,
    MovieCardsComponent,
    MovieCardComponent,
    FindMovieComponent,
    MenuComponent,
    MovieDetailsComponent,
    MovieCardMenuComponent
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
