import {View} from 'react-native';
import ForgotPassword from './ForgotPassword';
import SetPassword from './SetPassword';
import styles from './style';
import Verification from './Verification';
import useRecoverPasswordController from '../../Controllers/useRecoverPasswordController';
import ScrollView from '../../component/ScrollView';
import CustomText from '../../component/Text';

const RecoverPassword = () => {
  const {values, functions} = useRecoverPasswordController();

  const TABS = [
    {
      title: 'Forgot Password',
      subtitle: 'Enter an email address to receive a verification code',
      component: <ForgotPassword onPress={functions.onPress} />,
      // header: <AuthHeader title={'Forgot Password'} sub_heading={'Enter an email address to receive a verification code.'} />,
      button: 'Continue',
    },
    {
      title: 'Verification',
      subtitle: 'Enter the verification code sent to your email',
      component: <Verification onPress={functions.onPress} />,
      // header: <AuthHeader title={'Forgot Password'} sub_heading={'An email has been sent to you with a verification code. Please enter it here.'} />,
      button: 'Continue',
    },
    {
      title: 'Recover Password',
      subtitle: 'Enter your new password',
      component: <SetPassword />,
      // header: <AuthHeader title={'Forgot Password'} sub_heading={'Set a new password for your account'} />,
      button: 'Update',
    },
  ];

  return (
    <ScrollView style={styles.container}>
      {TABS[values.index].component}
      <CustomText
        weight="medium"
        style={styles.text}
        onPress={functions.onPressSignIn}>
        Back to Login
      </CustomText>
    </ScrollView>
  );
};

export default RecoverPassword;
