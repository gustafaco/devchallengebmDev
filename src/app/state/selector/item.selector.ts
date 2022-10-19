import { createSelector } from '@ngrx/store';
import { ItemsStateMovie, ItemsStateTv } from '../states/item.state';
import { AppState } from '../app.state';

export const selectItemsMovie = (state: AppState) => state.itemsMovie;

export const selectItemsTv = (state: AppState) => state.itemsTv;

export const selectLoading = createSelector(
  selectItemsMovie,
  (state: ItemsStateMovie) => state.loading
);


export const selectListItemsMovie = createSelector(
  selectItemsMovie,
  (state: ItemsStateMovie) => state.itemsMovie
);

export const selectListItemsTv = createSelector(
  selectItemsTv,
  (state: ItemsStateTv) => state.itemsTv
);

