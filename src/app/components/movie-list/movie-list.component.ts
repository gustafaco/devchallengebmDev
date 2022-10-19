import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ItemModel } from 'src/app/models/item.models';
import { DataTvmovieService } from 'src/app/service/data-tvmovie.service';
import { loadedItemsMovie, loadItemsMovie } from 'src/app/state/actions/item.actions';
import { selectListItemsMovie } from 'src/app/state/selector/item.selector';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  itemsMovie$: Observable<any> = new Observable();
  dataMovie: ItemModel[] = [];

  constructor(private store: Store<any>,private router: Router) {
    this.store.dispatch(loadItemsMovie());
    this.itemsMovie$ = this.store.select(selectListItemsMovie);

  }

  ngOnInit(): void {

     this.itemsMovie$.subscribe(data =>{
      this.dataMovie = data.results
      console.log(this.dataMovie,'data movie ok')
    });

  }
  onMovieId(idItem: number): void {
    this.router.navigate([`detailsmovie/` + idItem]);
  }
}
