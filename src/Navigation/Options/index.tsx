import {StackNavigationOptions} from '@react-navigation/stack';
import {Image, TouchableOpacity} from 'react-native';
import {goBack, navigate} from '../../Utils/navigation';
import styles from './style';
import {BottomTabNavigationOptions} from '@react-navigation/bottom-tabs';
import CustomText from '../../component/Text';
import {icons} from '../../Assets/Images';
import colors from '../../Utils/colors';
import {DrawerNavigationOptions} from '@react-navigation/drawer';
import {widthPixel} from '../../Utils/helpers';

const routes = [
  {
    route_name: 'ProfileScreen',
    drawer: true,
    search: true,
  },
  {
    route_name: 'ProductRecommendation',
    drawer: true,
    search: true,
  },
  {
    route_name: 'Home',
    drawer: true,
    search: true,
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
    route_name: 'PaymentScreen',
    title: 'Payment Information',
    back: true,
  },
  {
    route_name: 'ChatScreen',
    title: 'Emergency',
    back: true,
  },
  {
    route_name: 'ProductDetail',
    title: 'Product Detail',
    back: true,
  },
  {
    route_name: 'Notification',
    title: 'Notifications',
    back: true,
  },
  {
    route_name: 'EducationalContent',
    title: 'Educational Content',
    drawer: true,
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

  if (route?.back) {
    return (
      <TouchableOpacity
        style={[styles.icon, styles.left_margin]}
        onPress={goBack}>
        <Image style={styles.left_icon} source={icons.back} />
      </TouchableOpacity>
    );
  }
  if (route?.drawer) {
    return (
      <TouchableOpacity
        style={[styles.icon, styles.left_margin]}
        onPress={props.navigation.toggleDrawer}>
        <Image style={styles.left_icon} source={icons.drawer} />
      </TouchableOpacity>
    );
  }

  return null;
};

const renderRight = (props: any) => {
  let route = routes.find(item => item.route_name === props?.route?.name);

  if (route?.search) {
    return (
      <TouchableOpacity onPress={() => navigate('Notification')}>
        <Image
          style={[styles.icon, styles.right_icon]}
          source={icons.search_round}
        />
      </TouchableOpacity>
    );
  }

  return null;
};

const renderTitle = (props: any) => {
  let route = routes.find(item => item.route_name === props?.route?.name);

  if (route?.title) {
    return (
      <CustomText style={styles.title} weight="semiBold">
        {route.title}
      </CustomText>
    );
  }

  return null;
};

const StackOptions = (props: any): StackNavigationOptions => {
  return {
    headerShown: true,
    headerStyle: styles.header,
    headerTitle: () => renderTitle(props),
    headerTitleAlign: 'center',
    headerLeft: () => renderLeft(props),
    headerRight: () => renderRight(props),
    animationEnabled: false,
  };
};

const DrawerOptions = (props: any): DrawerNavigationOptions => {
  return {
    headerShown: true,
    headerStyle: styles.header,
    headerTitle: () => renderTitle(props),
    headerTitleAlign: 'center',
    headerLeft: () => renderLeft(props),
    headerRight: () => renderRight(props),
    drawerStyle: {
      width: widthPixel(286),
      backgroundColor: colors.primary,
    },
  };
};

const TabbarOptions = (props: any): BottomTabNavigationOptions => ({
  headerShown: true,
  headerStyle: styles.header,
  headerTitle: () => renderTitle(props),
  headerTitleAlign: 'center',
  headerLeft: () => renderLeft(props),
  headerRight: () => renderRight(props),
  tabBarShowLabel: true,
});

export {StackOptions, TabbarOptions, DrawerOptions};
