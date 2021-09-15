import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AddMovieComponent} from "./components/add-movie/add-movie.component";
import {WrapperComponent} from "./components/wrapper/wrapper.component";

const routes: Routes = [
  {
    path: '',
    component: WrapperComponent,
    pathMatch: 'full'
  },
  {
    path: 'add',
    component: AddMovieComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
