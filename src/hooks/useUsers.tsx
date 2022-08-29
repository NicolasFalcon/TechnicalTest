import {useEffect, useState} from 'react';
import {Users} from '../models/user';
import axios from 'axios';
import {Constants} from '../utils/contants';

export const useUsers = () => {
  const [user1, setUser1] = useState<Users.IUser[]>([]);
  const [user2, setUser2] = useState<Users.IUser[]>([]);
  const [user3, setUser3] = useState<Users.IUser[]>([]);

  useEffect(() => {
    getUser1();
    getUser2();
    getUser3();
  }, []);

  const getUser1 = async () => {
    const user = await axios.get<Users.IUser[]>(Constants.Urlusers.userData1);
    if (user.status !== 200) {
      console.error('Cannot get data user');
    }
    setUser1(user.data);
  };

  const getUser2 = async () => {
    const user = await axios.get<Users.IUser[]>(Constants.Urlusers.userData2);
    if (user.status !== 200) {
      console.error('Cannot get data user');
    }
    setUser2(user.data);
  };

  const getUser3 = async () => {
    const user = await axios.get<Users.IUser[]>(Constants.Urlusers.userData3);
    if (user.status !== 200) {
      console.error('Cannot get data user');
    }
    setUser3(user.data);
  };

  return {
    user1,
    user2,
    user3,
  };
};
