import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError, switchMap, exhaustMap } from 'rxjs/operators';
import { DataTvmovieService } from 'src/app/service/data-tvmovie.service';



@Injectable()
export class ItemsEffects {

  loadItemsMovie$ = createEffect(() => {
    return this.actions$.pipe(ofType('[Item List Movie] Load items Movie'), () =>
      this.dataTvmovieService.getDataMovie().pipe(
        map(itemsMovie => { return ({ type: '[Item List Movie] Loaded Succes Movie', itemsMovie })}),
        catchError(() => EMPTY)
      )
    );
  });

  loadItemsTv$ = createEffect(() => {
    return this.actions$.pipe(
      ofType('[Item List Tv] Load items Tv'),
      mergeMap(() =>
        this.dataTvmovieService.getDataTv().pipe(
          map(itemsTv => ({ type: '[Item List Tv] Loaded Succes Tv', itemsTv })),
          catchError(() => EMPTY)
        )
      )

    );
  });



  constructor(private actions$: Actions,private dataTvmovieService:DataTvmovieService) {}
}
