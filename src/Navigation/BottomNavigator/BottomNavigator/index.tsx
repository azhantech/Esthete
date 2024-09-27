import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBar from '../../../component/TabBar';
import ProfileScreen from '../../../Screens/ProfileScreen';
import GroupListScreen from '../../../Screens/GroupListScreen';
import HomeNavigator from '../../HomeNavigator';
import { TabbarOptions } from '../../Options';
import GroupBundles from '../../../Screens/GroupBundles';
const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={TabbarOptions}
      tabBar={props => <TabBar {...props} />}>
      <Tab.Screen
        name="HomeNavigator"
        component={HomeNavigator}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="GroupListScreen"
        component={GroupListScreen}
      />
      <Tab.Screen
        name="GroupBundles"
        component={GroupBundles}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
