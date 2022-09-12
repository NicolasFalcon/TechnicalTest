import {Dispatch} from 'react';
import {Submit} from '../../../models/Submit';
import {Constants} from '../../../utils/contants';
import {UserDataAction} from './IsubmitActions';
import Toast from 'react-native-toast-message';
import {UserReducerEnum} from '../../reducer/submitReducer';

export type userActionTypes = UserDataAction;

export const onSaveUserAction = (form: Submit.IValues) => {
  return async (dispatch: Dispatch<userActionTypes>) => {
    try {
      dispatch({
        type: UserReducerEnum.ON_SAVE_DATA,
        payload: form,
      });
      Toast.show({
        type: 'success',
        text1: Constants.successMessages.SucessSubmit,
      });
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: Constants.successMessages.SucessSubmit,
      });
    }
  };
};
