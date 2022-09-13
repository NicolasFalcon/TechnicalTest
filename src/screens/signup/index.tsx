import {View, Text, ImageBackground} from 'react-native';
import React from 'react';
import CustomInput from '../../components/customInput';
import {styles} from './styles';
import {useForm} from 'react-hook-form';
import CustomButton from '../../components/customButton';
import {Authenticate} from '../../models/Auth';
import Logo from '../../components/logo';
import {AuthSignUp} from '../../services/authServices';

const SignupScreen = () => {
  const {control, handleSubmit} = useForm<Authenticate.ISignUpRequest>();

  const img = './../../assets/background2.png';
  const handleSignUp = (signRequest: Authenticate.ISignUpRequest) => {
    AuthSignUp(signRequest);
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

          <Text style={styles.terms}>
            Al crear tu cuenta aceptas nuestros, Términos y Condiciones y
            Politica de Privacidad.
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
};

export default SignupScreen;
