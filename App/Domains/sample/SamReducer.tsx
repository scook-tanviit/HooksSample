
import { SamAction } from './SamReducer';

export enum SamAction {
  action1, action2, action3,
}

//I am trying to figure out a way to inject the error state/dispatcher into this, easily, not realisti right now.
export const samReduer = ({ type, payload}: {type: SamAction, payload: any }) => {


}

