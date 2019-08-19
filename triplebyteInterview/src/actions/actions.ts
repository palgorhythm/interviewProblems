import { Dispatch } from 'redux';
import { ActionTypes, defaultActionInterface } from './actionTypes';
import { DefaultInterface } from '../Interfaces';

export const defaultAction = () => {
  return async (dispatch: Dispatch) => {
    dispatch<defaultActionInterface>({
      type: ActionTypes.default
    });
  };
};
