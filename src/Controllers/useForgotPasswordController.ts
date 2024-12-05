import {useCallback} from 'react';
import {IForget} from '../Interfaces';
import {ForgetPasswordFormValidator} from '../Utils/validator';
import {useForgotPasswordMutation} from '../Redux/Services/Auth';
import { navigate } from '../Utils/navigation';
import Toast from 'react-native-toast-message';

const initial = {
  email: '',
};

const useForgotPasswordController = (props: IForget) => {
  const [forgetPassword, {isLoading, isSuccess}] = useForgotPasswordMutation();

  const onSubmit = useCallback((data: any) => {
    const payload = {
        email: data.email,
      };
  
    // props.onPress(1);
    forgetPassword(payload)
      .unwrap()
      .then(response => {
        console.log(JSON.stringify(response, null, 4));
        Toast.show({
          type: 'success',
          text1: response?.message,
        });
        navigate('VerificationCode', {email: data.email});
      })
      .catch(err => {
        Toast.show({
          text1: 'Error',
          text2: err?.data?.error,
          type: 'error',
        });
        console.log('Error from Forgot Password ===>', err);
      });
  }, []);

  return {
    validator: ForgetPasswordFormValidator,
    values: {
      initial,
    },
    functions: {
      onSubmit,
    },
  };
};

export default useForgotPasswordController;
