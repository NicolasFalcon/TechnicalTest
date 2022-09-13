import {Dispatch} from 'redux';

import {Constants} from '../../../utils/contants';
import {UserDataAction} from './IsubmitActions';
import Toast from 'react-native-toast-message';
import {UserReducerEnum} from '../../reducer/submitReducer';
import {User} from '../../../models/User';
import {AnyAction} from 'redux';

export type userActionTypes = UserDataAction;

export const onSaveUserAction = (form: User.IValues) => {
  return async (dispatch: Dispatch<AnyAction>) => {
    Toast.show({
      type: 'success',
      text1: Constants.successMessages.SucessSubmit,
    });

    await dispatch({
      type: UserReducerEnum.ON_SAVE_DATA,
      payload: form,
    });
  };
};
