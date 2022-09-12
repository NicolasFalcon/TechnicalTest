import {Submit} from '../../models/Submit';
import {userActionTypes} from '../actions/SubmitActions/submitActions';

export enum UserReducerEnum {
  ON_SAVE_DATA = ' ON_SUBMIT',
}
export type UserReducerStateType = {
  data: Submit.IValues[];
};

const initialState = {
  data: [],
};
const SubmitReducer = (
  state: UserReducerStateType = initialState,
  actions: userActionTypes,
) => {
  switch (actions.type) {
    case UserReducerEnum.ON_SAVE_DATA:
      return {
        ...state,
        data: [...state.data, actions.payload],
      };
    default:
      return state;
  }
};
export {SubmitReducer};

//TODO CHANGE SUBMIT NAMES FOR USER NAMES NAMES MORE DECLARATIVE
