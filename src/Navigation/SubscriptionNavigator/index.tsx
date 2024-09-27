import { createStackNavigator } from '@react-navigation/stack';
import GroupBundles from '../../Screens/GroupBundles';
import PaymentScreen from '../../Screens/PaymentScreen';
import { StackOptions } from '../Options';

const Stack = createStackNavigator();

const SubscriptionNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={StackOptions}>
      <Stack.Screen name="GroupBundles" component={GroupBundles} />
      <Stack.Screen name="PaymentScreen" component={PaymentScreen} />
    </Stack.Navigator>
  );
};

export default SubscriptionNavigator;
