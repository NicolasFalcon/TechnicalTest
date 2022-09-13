import {View} from 'react-native';

import React from 'react';
import {styles} from './styles';
import CustomInput from '../customInput';
import CustomButton from '../customButton';
import {useDispatch} from 'react-redux';
import {useForm} from 'react-hook-form';
import CardComponent from '../card';
import {User} from '../../models/Submit';
import {useInputs} from '../../hooks/useInputs';
import {onSaveUserAction} from '../../redux/actions/SubmitActions/submitActions';

const FormComponent = () => {
  const {control, handleSubmit, reset} = useForm<User.IValues>();
  const dispatch = useDispatch();

  const {inputs} = useInputs();

  const onSubmit = (submitRequest: User.IValues) => {
    console.log(submitRequest);
    dispatch<any>(onSaveUserAction(submitRequest));
    reset();
  };
  return (
    <View style={styles.container}>
      <CardComponent style={styles.card}>
        <View>
          {inputs.map((input: any) => (
            <CustomInput
              maxLength={input.maxLength}
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
            style={styles.GreenButton}
            onPress={handleSubmit(onSubmit)}
          />
        </View>
      </CardComponent>
    </View>
  );
};

export default FormComponent;
