import {User} from '../../models/User';
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
  action: userActionTypes,
) => {
  switch (action.type) {
    case UserReducerEnum.ON_SAVE_DATA:
      return {
        ...state,
        user: [...state.user, action.payload],
      };
    default:
      return state;
  }
};
export {SubmitReducer};
