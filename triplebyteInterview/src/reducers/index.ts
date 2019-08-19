import { combineReducers } from 'redux';
import { reducer, StoreSliceInterface } from './reducer';

export interface StoreInterface {
  app: StoreSliceInterface;
}

export const reducers = combineReducers<StoreInterface>({
  app: reducer
});
