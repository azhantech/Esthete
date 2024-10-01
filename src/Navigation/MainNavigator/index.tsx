import {createStackNavigator} from '@react-navigation/stack';
import AuthNavigator from '../AuthNavigation';
// import TakeSelfieScreen from '../../Screens/TakeSelfieScreen';
// import EditProfile from '../../Screens/EditProfile';
// import ChangePassword from '../../Screens/ChangePassword';
import DrawerNavigator from '../DrawerNavigator';
// import ChatScreen from '../../Screens/ChatScreen';
// import Notification from '../../Screens/Notification';
// import OtherUserProfile from '../../Screens/OtherUserProfile';
import {StackOptions} from '../Options';

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="AuthNavigator"
        component={AuthNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DrawerNavigator"
        component={DrawerNavigator}
        options={{headerShown: false}}
      />
      {/* <Stack.Screen name="TakeSelfieScreen" component={TakeSelfieScreen} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="ChangePassword" component={ChangePassword} />
      <Stack.Screen name="ChatScreen" component={ChatScreen} />
      <Stack.Screen name="OtherUserProfile" component={OtherUserProfile} />
      <Stack.Screen name="Notification" component={Notification} /> */}
    </Stack.Navigator>
  );
};
export default MainNavigator;
