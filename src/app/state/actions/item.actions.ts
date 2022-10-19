import { createAction, props } from '@ngrx/store';
import { ItemModel } from 'src/app/models/item.models';

export const loadItemsMovie = createAction('[Item List Movie] Load items Movie');

export const loadedItemsMovie = createAction(
  '[Item List Movie] Loaded Succes Movie',
  props<{ itemsMovie: ItemModel[] }>()
);

export const loadItemsTv = createAction('[Item List Tv] Load items Tv');

export const loadedItemsTv = createAction(
  '[Item List Tv] Loaded Succes Tv',
  props<{ itemsTv: ItemModel[] }>()
);
