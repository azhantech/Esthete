import { createStackNavigator } from '@react-navigation/stack';
import Home from '../../Screens/HomeScreen';
import { StackOptions } from '../Options';

const Stack = createStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={StackOptions}>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
