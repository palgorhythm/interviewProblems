import { DefaultInterface } from '../Interfaces';

export interface defaultActionInterface {
  type: ActionTypes.default;
  payload?: null;
}

export enum ActionTypes {
  default
}

export type todosActionInterfaceUnion = defaultActionInterface;
