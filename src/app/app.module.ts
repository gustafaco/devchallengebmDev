import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListTVMovieComponent } from './components/list-tvmovie/list-tvmovie.component';
import { DetailTVMovieComponent } from './components/detail-movie/detail-movie.component';
import { MainComponent } from './layout/main/main.component';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
//Store
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { ROOT_REDUCERS } from './state/app.state';
import {MatButtonModule} from '@angular/material/button';
import { ItemsEffects } from './state/effects/items.effects';
import { environment } from 'src/environments/environment';
import { TvListComponent } from './components/tv-list/tv-list.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { DetailTvComponent } from './components/detail-tv/detail-tv.component';


@NgModule({
  declarations: [
    AppComponent,
    ListTVMovieComponent,
    DetailTVMovieComponent,
    MainComponent,
    TvListComponent,
    MovieListComponent,
    HeaderComponent,
    FooterComponent,
    DetailTvComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    //Angular Material
    MatListModule,
    MatCardModule,
    MatTabsModule,
    MatButtonModule,
    //Http
    HttpClientModule,
    //Ngrx - Redux
    StoreModule.forRoot(ROOT_REDUCERS),
    StoreDevtoolsModule.instrument({
        maxAge: 25,
        logOnly: environment.production,
      }),
      EffectsModule.forRoot([ItemsEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
