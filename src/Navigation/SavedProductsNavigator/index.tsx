import {createStackNavigator} from '@react-navigation/stack';
import {StackOptions} from '../Options';
import SavedProducts from '../../Screens/SavedProducts';
import SavedProductDetail from '../../Screens/SavedProductDetail';

const Stack = createStackNavigator();

const SavedProductsNavigator = () => {
  return (
    <Stack.Navigator screenOptions={StackOptions}>
      <Stack.Screen name="SavedProducts" component={SavedProducts} />
      <Stack.Screen name="SavedProductDetail" component={SavedProductDetail} />
    </Stack.Navigator>
  );
};

export default SavedProductsNavigator;
