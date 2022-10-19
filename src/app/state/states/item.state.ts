import { ItemModel } from '../../models/item.models';

export interface ItemsStateMovie {
  loading: boolean;
  itemsMovie: ReadonlyArray<ItemModel>;
}

export interface ItemsStateTv {
  itemsTv: ReadonlyArray<ItemModel>;
}
