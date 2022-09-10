import {View, Text, ImageBackground} from 'react-native';
import React from 'react';
import {auth} from '../../../firebase';
import CustomInput from '../../components/customInput';
import {styles} from './styles';
import {useForm} from 'react-hook-form';
import CustomButton from '../../components/customButton';
import {Constants} from '../../utils/contants';
import {Authenticate} from '../../models/Auth';
import {FbStatus} from '../../enums/EHttpStatus';
import Toast from 'react-native-toast-message';
import Logo from '../../components/logo';

const SignupScreen = () => {
  const {control, handleSubmit} = useForm();

  const img = './../../assets/background2.png';
  const handleSignUp = (loginRequest: any) => {
    auth
      .createUserWithEmailAndPassword(loginRequest.email, loginRequest.password)
      .then(() => {
        Toast.show({
          type: 'success',
          text1: Constants.erroMessages.AccountCreated,
        });
      })
      .catch((error: Authenticate.IFirebaseError) => {
        switch (error.code) {
          case FbStatus.EmailAlreadyInuse:
            Toast.show({
              type: 'error',
              text1: Constants.erroMessages.EmailInUse,
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
        return;
      });
  };

  return (
    <ImageBackground source={require(img)} style={styles.background}>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Logo />
          <Text style={styles.title}>
            Enter email and password to create your account
          </Text>
          <CustomInput
            name="email"
            placeholder="Email"
            control={control}
            secureTextEntry={false}
            rules={{required: 'Email es requerido'}}
          />
          <CustomInput
            name="password"
            placeholder="Password"
            control={control}
            secureTextEntry={true}
            rules={{required: 'Contraseña es requerida'}}
          />

          <View style={styles.buttonContainer}>
            <CustomButton
              variant="solid"
              style={styles.buttonGreen}
              styleText={styles.buttonText}
              title="Create Account"
              onPress={handleSubmit(handleSignUp)}
            />
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default SignupScreen;
