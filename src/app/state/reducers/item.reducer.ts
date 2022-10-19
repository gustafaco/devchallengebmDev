import { createReducer, on } from '@ngrx/store';
import { loadedItemsMovie, loadedItemsTv, loadItemsMovie} from '../actions/item.actions';
import { ItemsStateMovie, ItemsStateTv } from '../states/item.state';

export const initialState: ItemsStateMovie = { loading: false, itemsMovie: [] };
export const initialStateB: ItemsStateTv = { itemsTv: [] };

export const itemsReducerMovie = createReducer(
  initialState,
  on(loadItemsMovie, state => {
    return { ...state, loading: true };
  }),
  on(loadedItemsMovie, (state, { itemsMovie }) => {
    return { ...state, itemsMovie };
  })

);

export const itemsReducerTv = createReducer(
  initialStateB,
  on(loadedItemsTv, (state, { itemsTv }) => {
    return { ...state, itemsTv };
  })

);
