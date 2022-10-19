import { ActionReducerMap } from '@ngrx/store';
import { itemsReducerMovie, itemsReducerTv } from './reducers/item.reducer';
import { ItemsStateMovie, ItemsStateTv } from './states/item.state';


export interface AppState {
  itemsMovie: ItemsStateMovie;
  itemsTv: ItemsStateTv
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  itemsMovie: itemsReducerMovie,
  itemsTv: itemsReducerTv
};
