import {useRoute} from '@react-navigation/native';
import {useVerifyMutation} from '../Redux/Services/Auth';
import {navigate} from '../Utils/navigation';
import Toast from 'react-native-toast-message';

const useVerifyPasswordController = () => {
  const route = useRoute();
  const {email} = route.params;

  const [verifyPassword, {isLoading}] = useVerifyMutation();

  const handlePasswordRecovery = async (values: {otp: string}) => {
    const payload = {
      email: email,
      otp: values.otp,
    };

    verifyPassword(payload)
      .unwrap()
      .then(response => {
        console.log(JSON.stringify(response, null, 4));
        Toast.show({
          type: 'success',
          text1: response?.message,
        });
        navigate('RecoverPassword', {email});
      })
      .catch(err => {
        console.log("Error from verify Password ===>", err);
        
        Toast.show({
          text1: 'Error',
          text2: err?.data?.error,
          type: 'error',
        });
        console.log('Error from verify Password ===>', err);
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

export default useVerifyPasswordController;
