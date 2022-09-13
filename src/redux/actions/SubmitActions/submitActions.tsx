import {Dispatch} from 'react';

import {Constants} from '../../../utils/contants';
import {UserDataAction} from './IsubmitActions';
import Toast from 'react-native-toast-message';
import {UserReducerEnum} from '../../reducer/submitReducer';
import {User} from '../../../models/Submit';

export type userActionTypes = UserDataAction;

export const onSaveUserAction = (form: User.IValues) => {
  return (dispatch: Dispatch<userActionTypes>) => {
    Toast.show({
      type: 'success',
      text1: Constants.successMessages.SucessSubmit,
    });

    return dispatch({
      type: UserReducerEnum.ON_SAVE_DATA,
      payload: form,
    });
  };
};
