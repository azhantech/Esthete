import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawerContent from '../../component/CustomDrawerContent';
import BottomNavigator from '../BottomNavigator/BottomNavigator';
import Contactus from '../../Screens/Contactus';
import TermsAndConditions from '../../Screens/TermsAndConditions';
import PrivacyPolicy from '../../Screens/PrivacyPolicy';
import AboutUs from '../../Screens/AboutUs';
import {DrawerOptions} from '../Options';
import ProductDetail from '../../Screens/ProductDetail';
import EducationalContent from '../../Screens/EducationalContent';
import SetGoals from '../../Screens/SetGoals';
import ExpertConsultation from '../../Screens/ExpertConsultation';
import ProductRecommendation from '../../Screens/ProductRecommendation';
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={DrawerOptions}>
      <Drawer.Screen
        name="BottomNavigator"
        component={BottomNavigator}
        options={{headerShown: false}}
      />
      <Drawer.Screen name="ExpertConsultation" component={ExpertConsultation} />
      <Drawer.Screen name="ProductDetail" component={ProductDetail} />
      <Drawer.Screen name="Contactus" component={Contactus} />
      <Drawer.Screen name="EducationalContent" component={EducationalContent} />
      <Drawer.Screen name="SetGoals" component={SetGoals} />
      <Drawer.Screen
        name="ProductRecommendation"
        component={ProductRecommendation}
      />
      <Drawer.Screen name="Terms" component={TermsAndConditions} />
      <Drawer.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
      <Drawer.Screen name="AboutUs" component={AboutUs} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
