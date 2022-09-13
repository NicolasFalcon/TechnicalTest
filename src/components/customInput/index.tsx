import {Text, TextInput, View} from 'react-native';
import React from 'react';
import {Controller} from 'react-hook-form';
import {styles} from './styles';
import {Authenticate} from '../../models/Auth';

const CustomInput = ({
  control,
  name,
  placeholder,
  secureTextEntry,
  rules,
  label,
  maxLength,
}: Authenticate.CustomInput) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({field: {value, onBlur, onChange}, fieldState: {error}}) => (
        <View>
          {label && <Text style={styles.label}>{label}</Text>}
          <TextInput
            maxLength={maxLength}
            autoCapitalize="none"
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            placeholder={placeholder}
            style={styles.input}
            secureTextEntry={secureTextEntry}
          />
          {error && <Text style={styles.hint}>{error.message}</Text>}
        </View>
      )}
    />
  );
};

export default CustomInput;
