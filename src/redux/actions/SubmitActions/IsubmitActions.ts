import {User} from '../../../models/Submit';
import {UserReducerEnum} from '../../reducer/submitReducer';

export interface UserDataAction {
  readonly type: UserReducerEnum.ON_SAVE_DATA;
  payload: User.IValues;
}
