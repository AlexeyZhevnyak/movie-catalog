import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AddMoviePageComponent} from "./components/add-movie/add-movie-page.component";
import {WrapperComponent} from "./components/wrapper/wrapper.component";

const routes: Routes = [
  {
    path: '',
    component: WrapperComponent,
    pathMatch: 'full'
  },
  {
    path: 'add',
    component: AddMoviePageComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
