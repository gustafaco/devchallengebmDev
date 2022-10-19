import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ItemModel } from 'src/app/models/item.models';
import { DataTvmovieService } from 'src/app/service/data-tvmovie.service';
import { DetailTvMovieService } from 'src/app/service/detail-tv-movie.service';
import { loadItemsTv } from 'src/app/state/actions/item.actions';
import { selectListItemsTv } from 'src/app/state/selector/item.selector';

@Component({
  selector: 'app-tv-list',
  templateUrl: './tv-list.component.html',
  styleUrls: ['./tv-list.component.scss']
})
export class TvListComponent implements OnInit {

  itemsTv$: Observable<any> = new Observable();
  dataTv: ItemModel[] = [];

  constructor(private store: Store<any>,private router: Router) {
    this.store.dispatch(loadItemsTv());
    this.itemsTv$ = this.store.select(selectListItemsTv);

  }

  ngOnInit(): void {

    this.itemsTv$.subscribe(data =>{
      this.dataTv = data.results
      console.log(this.dataTv,'data tv ok')
    });
  }

  onTvId(idItem: number): void {
    this.router.navigate([`detailstv/` + idItem]);
  }



}
