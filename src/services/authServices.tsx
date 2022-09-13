import {auth} from './../../firebase';
import {FbStatus} from '../enums/EHttpStatus';
import Toast from 'react-native-toast-message';
import {Authenticate} from '../models/Auth';
import {Constants} from '../utils/contants';
import {ENavigations} from '../enums/ENavigations';
import {EScreens} from '../enums/EScreens';

//-------LOGIN FIREBASE--------//
export const AuthLogin = (loginRequest: Authenticate.ILoginRequest) => {
  auth
    .signInWithEmailAndPassword(loginRequest.email, loginRequest.password)
    .then(() => {
      Toast.show({
        type: 'success',
        text1: Constants.successMessages.SuccessLogin,
      });
    })
    .catch((error: Authenticate.IFirebaseError) => {
      onError(error);
    });
};

//-------LOGOUT FIREBASE--------//
export const AuthSignOut = (navigation: any) => {
  auth
    .signOut()
    .then(() => {
      navigation.navigate(ENavigations.LoginStack, {
        screen: EScreens.Login,
      });
    })
    .catch((error: any) => console.error(error));
};

const onError = (error: Authenticate.IFirebaseError) => {
  switch (error.code) {
    case FbStatus.TooManyRequests:
      Toast.show({
        type: 'error',
        text1: Constants.erroMessages.TemporarilyDisabled,
      });
      break;
    case FbStatus.UserNoFound:
      Toast.show({
        type: 'error',
        text1: Constants.erroMessages.UserNotFound,
      });
      break;
    case FbStatus.WrongPassword:
      Toast.show({
        type: 'error',
        text1: Constants.erroMessages.WrongPassword,
      });
      break;
    case FbStatus.InvalidEmail:
      Toast.show({
        type: 'error',
        text1: Constants.erroMessages.InvalidEmail,
      });
      break;
    default:
      break;
  }
};
