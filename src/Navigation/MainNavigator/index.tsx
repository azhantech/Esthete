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
import ProfileQuestionnaireNavigator from '../ProfileQuestionnaireNavigator';
import {useSelector} from 'react-redux';
import {selectLoggedIn} from '../../Redux/Slices/auth';
import Subscription from '../../Screens/Subscription';
import SavedProductsNavigator from '../SavedProductsNavigator';
import MyGoals from '../../Screens/MyGoals';
import GoalDetails from '../../Screens/GoalDetails';
import SubscriptionLogs from '../../Screens/SubscriptionLogs';

const Stack = createStackNavigator();

const MainNavigator = () => {
  const is_logged_in = useSelector(selectLoggedIn);
  console.log('is_logged_in: ', is_logged_in);

  return (
    <Stack.Navigator screenOptions={StackOptions}>
      {!is_logged_in ? (
        // <Stack.Screen
        //   name="AuthNavigator"
        //   component={AuthNavigator}
        //   options={{headerShown: false}}
        // />
        <Stack.Screen
          name="DrawerNavigator"
          component={DrawerNavigator}
          options={{headerShown: false}}
        />
      ) : (
        <>
          <Stack.Screen
            name="Subscription"
            component={Subscription}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="DrawerNavigator"
            component={DrawerNavigator}
            options={{headerShown: false}}
          />
          <Stack.Screen name="Videos" component={Videos} />
          <Stack.Screen name="Articles" component={Articles} />
          <Stack.Screen name="ArticleDetail" component={ArticleDetail} />
          <Stack.Screen
            name="ExpertConsultation"
            component={ExpertConsultation}
          />
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
          <Stack.Screen
            name="SavedProductsNavigator"
            component={SavedProductsNavigator}
            options={{headerShown: false}}
          />
          <Stack.Screen name="MyGoals" component={MyGoals} />
          <Stack.Screen name="GoalDetails" component={GoalDetails} />
          <Stack.Screen name="SubscriptionLogs" component={SubscriptionLogs} />
        </>
      )}
    </Stack.Navigator>
  );
};
export default MainNavigator;
