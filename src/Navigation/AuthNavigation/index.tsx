import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../../Screens/LoginScreen';
import SignUpScreen from '../../Screens/SignUpScreen';
import PasswordRecovery from '../../Screens/PasswordRecovery';
import VerificationCode from '../../Screens/VerificationCode';
import RecoverPassword from '../../Screens/RecoverPassword';
import OnBoarding from '../../Screens/OnBoarding';

const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false, animationEnabled: false}}>
      <Stack.Screen name="OnBoarding" component={OnBoarding} />
      <Stack.Screen name="Signup" component={SignUpScreen} />
      <Stack.Screen name="Signin" component={LoginScreen} />
      <Stack.Screen name="PasswordRecovery" component={PasswordRecovery} />
      <Stack.Screen name="VerificationCode" component={VerificationCode} />
      <Stack.Screen name="RecoverPassword" component={RecoverPassword} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
