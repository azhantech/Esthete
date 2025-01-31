import {createStackNavigator} from '@react-navigation/stack';
import {StackOptions} from '../Options';
import ProfileCompletionAuth from '../../Screens/ProfileCompletionAuth';
import ProfileCompletion from '../../Screens/ProfileCompletion';
import ProfileCompletionFinal from '../../Screens/ProfileCompletionFinal';
import ProfileQuestionnaire from '../../Screens/ProfileQuestionnaire';

const Stack = createStackNavigator();

const ProfileQuestionnaireNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="ProfileCompletion" component={ProfileCompletion} />
      <Stack.Screen
        name="ProfileCompletionFinal"
        component={ProfileCompletionFinal}
      />
      <Stack.Screen
        name="ProfileQuestionnaire"
        component={ProfileQuestionnaire}
        options={StackOptions}
      />
      <Stack.Screen
        name="ProfileQuestions1"
        component={ProfileCompletionAuth}
      />
    </Stack.Navigator>
  );
};

export default ProfileQuestionnaireNavigator;
