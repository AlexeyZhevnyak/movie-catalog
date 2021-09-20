import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {AddMoviePageComponent} from "./components/add-movie/add-movie-page.component";
import {EditComponent} from "./components/edit/edit.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'add',
    component: AddMoviePageComponent,
    pathMatch: 'full'
  },
  {
    path: "edit/:movie",
    component: EditComponent,
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
