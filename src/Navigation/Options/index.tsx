import {StackNavigationOptions} from '@react-navigation/stack';
import {Image, TouchableOpacity} from 'react-native';
import {goBack, navigate} from '../../Utils/navigation';
import styles from './style';
import {BottomTabNavigationOptions} from '@react-navigation/bottom-tabs';
import CustomText from '../../component/Text';
import {icons} from '../../Assets/Images';
import colors from '../../Utils/colors';
import {DrawerNavigationOptions} from '@react-navigation/drawer';

const routes = [
  {
    route_name: 'Signin',
    title: '',
    back: true,
    header_style: {
      borderBottomWidth: 0,
    },
  },
  {
    route_name: 'Signup',
    title: '',
    back: true,
    header_style: {
      borderBottomWidth: 0,
    },
  },
  {
    route_name: 'QuestionnaireScreen',
    title: 'Questionnaire',
    back: true,
  },
  {
    route_name: 'ProfileScreen',
    drawer: true,
    logo: true,
    notification: true,
  },
  {
    route_name: 'GroupListScreen',
    drawer: true,
    logo: true,
    notification: true,
  },
  {
    route_name: 'Home',
    drawer: true,
    logo: true,
    notification: true,
  },
  {
    route_name: 'EditProfile',
    title: 'Edit Profile',
    back: true,
  },
  {
    route_name: 'ChangePassword',
    title: 'Change Password',
    back: true,
  },
  {
    route_name: 'Terms',
    title: 'Terms & Conditions',
    back: true,
  },
  {
    route_name: 'PrivacyPolicy',
    title: 'Privacy Policy',
    back: true,
  },
  {
    route_name: 'Contactus',
    title: 'Contact Us',
    back: true,
  },
  {
    route_name: 'AboutUs',
    title: 'About Us',
    back: true,
  },
  {
    route_name: 'OtherUserProfile',
    title: '',
    notification: false,

    back: true,
    header_style: {
      borderBottomWidth: 0,
    },
  },
  {
    route_name: 'PaymentScreen',
    title: 'Payment Information',
    back: true,
  },
  {
    route_name: 'QuestionnaireScreen',
    title: 'Questionnaire',
    back: true,
  },
  {
    route_name: 'ChatScreen',
    title: 'Emergency',
    back: true,
  },
  {
    route_name: 'Notification',
    title: 'Notifications',
    back: true,
  },
  // {
  //   route_name: 'GiftPayment',
  //   title: 'Payment Method',
  //   back: true,
  //   header_color: colors.white,
  //   title_style: {
  //     color: colors.white,
  //   },
  //   back_style: {
  //     tintColor: colors.white,
  //   },
  // },
];

const renderLeft = (props: any) => {
  let route = routes.find(item => item.route_name === props?.route?.name);
  let style = route?.back_style || {};

  if (route?.back) {
    return (
      <TouchableOpacity
        style={[styles.icon, styles.left_margin]}
        onPress={goBack}>
        <Image style={[styles.left_icon, style]} source={icons.backBtn} />
      </TouchableOpacity>
    );
  }
  if (route?.drawer) {
    return (
      <TouchableOpacity
        style={[styles.icon, styles.left_margin]}
        onPress={props.navigation.toggleDrawer}>
        <Image style={[styles.left_icon, style]} source={icons.drawer} />
      </TouchableOpacity>
    );
  }

  return null;
};

const renderRight = (props: any) => {
  let route = routes.find(item => item.route_name === props?.route?.name);

  if (route?.notification) {
    return (
      <TouchableOpacity onPress={() => navigate('Notification')}>
        <Image
          style={[styles.icon, styles.right_icon]}
          source={icons.notification}
        />
      </TouchableOpacity>
    );
  }

  return null;
};

const renderTitle = (props: any) => {
  let route = routes.find(item => item.route_name === props?.route?.name);
  let style = route?.title_style || {};

  if (route?.title) {
    return (
      <CustomText style={[styles.title, style]} weight="semiBold">
        {route.title}
      </CustomText>
    );
  }
  if (route?.logo) {
    return <Image source={icons.headerLogo} />;
  }

  return null;
};

// const getHeaderColor = (props: any) => {
//   let route = routes.find(item => item.route_name === props?.route?.name);

//   if (route?.header_color) {
//     return {
//       backgroundColor: route?.header_color,
//     }
//   }

//   return {
//     backgroundColor: 'transparent',
//   };
// };

const getHeaderStyle = (props: any) => {
  let route = routes.find(item => item.route_name === props?.route?.name);

  if (route?.header_style) {
    return {
      ...styles.header,
      ...route?.header_style,
    };
  }

  return styles.header;
};

const StackOptions = (props: any): StackNavigationOptions => {
  return {
    // headerBackgroundContainerStyle: getHeaderColor(props),
    headerShown: true,
    headerStyle: getHeaderStyle(props),
    headerTitle: () => renderTitle(props),
    headerTitleAlign: 'center',
    headerLeft: () => renderLeft(props),
    headerRight: () => renderRight(props),
    animationEnabled: false,
  };
};

const DrawerOptions = (props: any): DrawerNavigationOptions => {
  return {
    // headerBackgroundContainerStyle: getHeaderColor(props),
    headerShown: true,
    headerStyle: getHeaderStyle(props),
    headerTitle: () => renderTitle(props),
    headerTitleAlign: 'center',
    headerLeft: () => renderLeft(props),
    headerRight: () => renderRight(props),
    drawerStyle: {
      width: '100%', // Full screen drawer,
      backgroundColor: colors.drawerColor,
    },
  };
};

const TabbarOptions = (props: any): BottomTabNavigationOptions => ({
  headerShown: true,
  headerStyle: getHeaderStyle(props),
  headerTitle: () => renderTitle(props),
  headerTitleAlign: 'center',
  // headerBackgroundContainerStyle: getHeaderColor(props),
  headerLeft: () => renderLeft(props),
  headerRight: () => renderRight(props),
  // tabBarActiveTintColor: colors.selectionColor,
  tabBarShowLabel: true,
  // tabBarStyle: styles.tabBarStyle,
});

export {StackOptions, TabbarOptions, DrawerOptions};
