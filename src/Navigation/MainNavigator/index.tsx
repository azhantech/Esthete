import {createStackNavigator} from '@react-navigation/stack';
import AuthNavigator from '../AuthNavigation';
import DrawerNavigator from '../DrawerNavigator';
import {StackOptions} from '../Options';
import Videos from '../../Screens/Videos';
import Articles from '../../Screens/Articles';
import ArticleDetail from '../../Screens/ArticleDetail';
import ExpertConsultation from '../../Screens/ExpertConsultation';
import CommunityForumAnswers from '../../Screens/CommunityForumAnswers';
import RequestNewThread from '../../Screens/RequestNewThread';
import EditProfile from '../../Screens/EditProfile';
import ProfileQuestionnaire from '../../Screens/ProfileQuestionnaire';
import ProfileQuestionnaireNavigator from '../ProfileQuestionnaireNavigator';

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator screenOptions={StackOptions}>
      {/* <Stack.Screen
        name="AuthNavigator"
        component={AuthNavigator}
        options={{headerShown: false}}
      /> */}
      <Stack.Screen
        name="DrawerNavigator"
        component={DrawerNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Videos" component={Videos} />
      <Stack.Screen name="Articles" component={Articles} />
      <Stack.Screen name="ArticleDetail" component={ArticleDetail} />
      <Stack.Screen name="ExpertConsultation" component={ExpertConsultation} />
      <Stack.Screen
        name="CommunityForumAnswers"
        component={CommunityForumAnswers}
      />
      <Stack.Screen name="RequestNewThread" component={RequestNewThread} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen
        name="ProfileQuestionnaireNavigator"
        component={ProfileQuestionnaireNavigator}
        options={{headerShown: false}}
      />
      {/* <Stack.Screen name="TakeSelfieScreen" component={TakeSelfieScreen} />
      <Stack.Screen name="ChangePassword" component={ChangePassword} />
      <Stack.Screen name="ChatScreen" component={ChatScreen} />
      <Stack.Screen name="OtherUserProfile" component={OtherUserProfile} />
      <Stack.Screen name="Notification" component={Notification} /> */}
    </Stack.Navigator>
  );
};
export default MainNavigator;
