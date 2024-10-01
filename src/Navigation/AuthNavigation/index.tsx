import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../../Screens/LoginScreen';
import SignUpScreen from '../../Screens/SignUpScreen';
import PasswordRecovery from '../../Screens/PasswordRecovery';
import VerificationCode from '../../Screens/VerificationCode';
import RecoverPassword from '../../Screens/RecoverPassword';
import SocialSignInScreen from '../../Screens/SocialSignInScreen';
import OnBoarding from '../../Screens/OnBoarding';
import Subscription from '../../Screens/Subscription';
import ProfileCompletion from '../../Screens/ProfileCompletion';

const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false, animationEnabled: false}}>
      <Stack.Screen name="ProfileCompletion" component={ProfileCompletion} />

      <Stack.Screen name="OnBoarding" component={OnBoarding} />
      <Stack.Screen name="Subscription" component={Subscription} />
      <Stack.Screen name="Signup" component={SignUpScreen} />
      <Stack.Screen name="SocialSignInScreen" component={SocialSignInScreen} />
      <Stack.Screen name="Signin" component={LoginScreen} />
      <Stack.Screen name="PasswordRecovery" component={PasswordRecovery} />
      <Stack.Screen name="VerificationCode" component={VerificationCode} />
      <Stack.Screen name="RecoverPassword" component={RecoverPassword} />

      {/* <Stack.Screen
        name="QuestionnaireScreen"
        component={QuestionnaireScreen}
        options={StackOptions}
      /> */}
    </Stack.Navigator>
  );
};

export default AuthNavigator;
