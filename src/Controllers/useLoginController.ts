import {useEffect, useState} from 'react';
import useAppDispatch from '../Hooks/useAppDispatch';
import useAppSelector from '../Hooks/useAppSelector';
import {useLoginMutation} from '../Redux/Services/Auth';
import {
  selectSavedCredentials,
  setCredentials,
  setLogin,
} from '../Redux/Slices/user';

import Toast from 'react-native-toast-message';

const useLoginController = () => {
  const [token, setFcmToken] = useState('');

  const [login, {isLoading}] = useLoginMutation();

  const {email, password, checked} = useAppSelector(selectSavedCredentials);

  const dispatch = useAppDispatch();

  const handleSignIn = async (values: {
    email: string;
    password: string;
    isChecked: boolean;
  }) => {
    const payload = {
      email: values.email,
      password: values.password,
      deviceToken: token,
    };

    login(payload)
      .unwrap()
      .then(res => {
        console.log('response from Login ======>', res);
        if (res?.token) {
          dispatch(setLogin({token: res?.token, user: res?.user}));
          if (values.isChecked) {
            dispatch(
              setCredentials({
                email: values.email,
                password: values.password,
                checked: values.isChecked,
              }),
            );
          }
        }
      })
      .catch(err => {
        Toast.show({
          text1: 'Error',
          text2: err?.data?.error,
          type: 'error',
        });
        console.log('err from Login --------->>', err);
      });
  };

  return {
    values: {
      isLoading,
      email,
      password,
      checked,
    },
    functions: {
      handleSignIn,
    },
  };
};

export default useLoginController;
