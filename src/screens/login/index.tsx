import {View, ImageBackground, Text} from 'react-native';
import {useForm} from 'react-hook-form';
import React, {useEffect} from 'react';
import {styles} from './styles';
import CustomInput from '../../components/customInput';
import {auth} from '../../../firebase';
import {useNavigation} from '@react-navigation/native';
import CustomButton from '../../components/customButton';
import {Authenticate} from '../../models/Auth';
import {EScreens} from '../../enums/EScreens';
import Logo from '../../components/logo';
import {AuthLogin} from '../../services/authServices';

const LoginScreen = () => {
  const img = './../../assets/background.png';
  const {control, handleSubmit} = useForm<Authenticate.ILoginRequest>();
  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user: any) => {
      if (user) {
        navigation.navigate(EScreens.Home);
      }
    });
    return unsubscribe;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleLogin = (loginRequest: Authenticate.ILoginRequest) => {
    AuthLogin(loginRequest);
  };

  return (
    <ImageBackground source={require(img)} style={styles.background}>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Logo />
          <Text style={styles.title}>Log in into your account</Text>
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
              title="Login"
              onPress={handleSubmit(handleLogin)}
            />

            <CustomButton
              variant="outline"
              style={styles.buttonOutline}
              styleText={styles.buttonText}
              title="Create Account"
              onPress={() => navigation.navigate(EScreens.Signup)}
            />
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default LoginScreen;
