/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, useState} from 'react';
import {Inputs} from '../models/Inputs';
import axios from 'axios';
import {Constants} from '../utils/contants';
import {HttpResponse} from '../enums/EHttpStatus';

export const useInputs = () => {
  const [inputs, setInputs] = useState<Inputs.InputField[]>([]);

  useEffect(() => {
    getInputs();
  }, []);

  const getInputs = async () => {
    await axios.get(`${Constants.urlInputs.baseUrl}`).then(input => {
      if (input.status !== HttpResponse.Success) {
        console.log('cannot get data');
      }
      setInputs(input.data);
    });
  };

  return {
    inputs,
  };
};
