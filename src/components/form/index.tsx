import {View} from 'react-native';

import React from 'react';
import {styles} from './styles';
import CustomInput from '../customInput';
import CustomButton from '../customButton';

import {useForm} from 'react-hook-form';
import CardComponent from '../card';
import {Submit} from '../../models/Submit';
import {Constants} from '../../utils/contants';
import Toast from 'react-native-toast-message';
import {useInputs} from '../../hooks/useInputs';

const FormComponent = () => {
  const {control, handleSubmit} = useForm<Submit.IValues>();

  const {inputs} = useInputs();

  const onSubmit = (submitRequest: Submit.IValues) => {
    console.log(submitRequest.name, submitRequest.surname, submitRequest.age);
    Toast.show({
      type: 'success',
      text1: Constants.successMessages.SucessSubmit,
    });
  };

  return (
    <View style={styles.container}>
      <CardComponent style={styles.card}>
        <View>
          {inputs.map((input: any) => (
            <CustomInput
              label={input.label}
              placeholder={input.placeholder}
              control={control}
              name={input.id}
              key={input.id}
              rules={{required: 'Este campo es requerido'}}
            />
          ))}
        </View>
        <View style={styles.buttonContainer}>
          <CustomButton
            variant="solid"
            title="Submit"
            onPress={handleSubmit(onSubmit)}
          />
        </View>
      </CardComponent>
    </View>
  );
};

export default FormComponent;
