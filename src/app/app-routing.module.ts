import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailTVMovieComponent } from './components/detail-movie/detail-movie.component';
import { DetailTvComponent } from './components/detail-tv/detail-tv.component';
import { ListTVMovieComponent } from './components/list-tvmovie/list-tvmovie.component';
import { MainComponent } from './layout/main/main.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    {
      path: '',
      component: MainComponent,
      children: [{ path: '', component: ListTVMovieComponent }],
    },
    {
      path: 'detailsmovie/:idItem',
      component: MainComponent,
      children: [{ path: '', component: DetailTVMovieComponent }],
    },
    {
      path: 'detailstv/:idItem',
      component: MainComponent,
      children: [{ path: '', component: DetailTvComponent }],
    },])],


  exports: [RouterModule]
})
export class AppRoutingModule { }
