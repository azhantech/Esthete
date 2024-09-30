import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TabBar from '../../../component/TabBar';
import ProfileScreen from '../../../Screens/ProfileScreen';
import HomeNavigator from '../../HomeNavigator';
import {TabbarOptions} from '../../Options';
import ProductRecommendation from '../../../Screens/ProductRecommendation';

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={TabbarOptions}
      tabBar={props => <TabBar {...props} />}>
      <Tab.Screen
        name="HomeNavigator"
        component={HomeNavigator}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="ProductRecommendation"
        component={ProductRecommendation}
      />
      <Tab.Screen name="Forum" component={ProfileScreen} />
      <Tab.Screen name="ProfileScreen" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
