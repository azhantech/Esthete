import {useRoute} from '@react-navigation/native';
import {useSetPasswordMutation} from '../Redux/Services/Auth';
import {navigate} from '../Utils/navigation';
import Toast from 'react-native-toast-message';

const useResetPasswordController = () => {
  const route = useRoute();
  const {email} = route.params;

  const [resetPassword, {isLoading}] = useSetPasswordMutation();

  const handlePasswordRecovery = async (values: {
    password: string;
    confirmPassword: string;
  }) => {
    const payload = {
      email: email,
      newPassword: values.password,
    };

    resetPassword(payload)
      .unwrap()
      .then(response => {
        console.log(JSON.stringify(response, null, 4));
        Toast.show({
          type: 'success',
          text1: response?.message,
          text2: 'Please login to continue',
        });
        navigate('Signin');
      })
      .catch(err => {
        Toast.show({
          text1: 'Error',
          text2: err?.data?.error,
          type: 'error',
        });
        console.log('Error from Forgot Password ===>', err);
      });
  };

  return {
    values: {
      isLoading,
    },
    functions: {
      handlePasswordRecovery,
    },
  };
};

export default useResetPasswordController;
