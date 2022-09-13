import {User} from '../../models/Submit';
import {userActionTypes} from '../actions/SubmitActions/submitActions';

export enum UserReducerEnum {
  ON_SAVE_DATA = ' ON_SUBMIT',
}
export type UserReducerStateType = {
  user: User.IValues[];
};

const initialState = {
  user: [],
};
const SubmitReducer = (
  state: UserReducerStateType = initialState,
  actions: userActionTypes,
) => {
  switch (actions.type) {
    case UserReducerEnum.ON_SAVE_DATA:
      return {
        ...state,
        user: [...state.user, actions.payload],
      };
    default:
      return state;
  }
};
export {SubmitReducer};
