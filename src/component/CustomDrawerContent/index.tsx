import React, {useState} from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import CustomText from '../../component/Text';
import Button from '../../component/Button';
import colors from '../../Utils/colors';
import {font, heightPixel, vh, vw, widthPixel} from '../../Utils/helpers';
import {drawerIcon, dummyImages, icons} from '../../Assets/Images'; // For the user image or any icons
import {navigateAndReplace, navigationRef} from '../../Utils/navigation';
import Modal from '../Modal';
import useToggle from '../../Hooks/useToggle';
import fonts from '../../Assets/Fonts';
import {useDispatch, useSelector} from 'react-redux';
import {selectUser, setLogout} from '../../Redux/Slices/user';

const CustomDrawerContent = (props: any) => {
  const [open, setOpen, toggle] = useToggle();
  const [selected, setSelected] = React.useState<number | null>(1);
  const user = useSelector(selectUser);

  const dispatch = useDispatch();
  const handleLogout = () => {
    // navigateAndReplace('AuthNavigator');
    dispatch(setLogout());
    setOpen(!open);
  };
  const drawer = [
    {
      id: 1,
      name: 'Home',
      route: 'BottomNavigator',
    },
    // {
    //   id: 2,
    //   name: 'My Profile',
    //   route: 'BottomNavigator',
    //   inner_route: 'ProfileScreen',
    // },
    {
      id: 2,
      name: 'Expert’s Consultation',
      route: 'ExpertConsultation',
    },
    {
      id: 9,
      name: 'Educational Content',
      route: 'EducationalContent',
    },
    {
      id: 10,
      name: 'Product Recommendations',
      route: 'ProductRecommendation',
    },
    {
      id: 6,
      name: 'Set Goals',
      route: 'SetGoals',
    },
    {
      id: 7,
      name: 'About Us',
      route: 'AboutUs',
    },
    {
      id: 3,
      name: 'Subscription Logs',
      route: 'SubscriptionLogs',
    },
    {
      id: 4,
      name: 'Contact Us',
      route: 'Contactus',
    },
    {
      id: 8,
      name: 'Privacy Policy',
      route: 'PrivacyPolicy',
    },
    {
      id: 5,
      name: 'Terms & Conditions',
      route: 'Terms',
    },
  ];
  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={styles.container}>
      {/* Profile Section */}
      <TouchableOpacity
        style={styles.profileSection}
        activeOpacity={1}
        onPress={() =>
          navigationRef.navigate('BottomNavigator', {
            screen: 'ProfileScreen',
          })
        }>
        <Image
          source={
            user?.profile_image
              ? {
                  uri: `http://projectstagingzone.com:18001/${user?.profile_image}`,
                }
              : dummyImages.profile
          }
          style={styles.profileImage}
          // Replace with actual user image
        />
        <View style={styles.profilNameSection}>
          <CustomText style={styles.profileName} weight="semiBold">
            {user?.name}
          </CustomText>
          {/* <CustomText style={styles.greetingText}>
            lorem lipsum dolor
          </CustomText> */}
        </View>
      </TouchableOpacity>
      {/* <View style={styles.seprator} /> */}

      {/* Menu Items */}
      <View style={styles.menuItems}>
        {drawer?.map((val, index) => {
          return (
            <TouchableOpacity
              key={val?.id.toString()}
              style={[
                styles.menuItem,
                index == drawer.length - 1 && {borderBottomWidth: 0},
              ]}
              onPress={() => {
                setSelected(val?.id);
                if (val?.inner_route) {
                  navigationRef.navigate(val?.route, {
                    screen: val?.inner_route,
                  });
                } else {
                  navigationRef.navigate(val?.route);
                }
              }}>
              <CustomText
                style={styles.menuText}
                numberOfLines={1}
                weight={selected === val?.id ? 'bold' : 'regular'}>
                {val?.name}
              </CustomText>
            </TouchableOpacity>
          );
        })}
      </View>

      {/* Logout Button */}
      <View style={styles.logoutButtonContainer}>
        <Button
          text="Logout"
          onPress={toggle}
          style={styles.logoutButton}
          textStyle={styles.logoutText}
        />
      </View>
      <Modal
        open={open}
        setOpen={setOpen}
        text="Are You Sure You Want To Logout"
        buttons={[
          {text: 'Yes', onPress: handleLogout},
          {text: 'No', onPress: toggle},
        ]}
        row
        headingStyle={{color: colors.black}}
        icon={icons.pop_up_success}
      />
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: vw * 5,
    alignItems: 'center',
  },
  profilNameSection: {
    width: widthPixel(117),
  },
  profileSection: {
    alignItems: 'center',
    marginTop: vh * 3,
    marginBottom: vh * 7,
    flexDirection: 'row',
    alignSelf: 'center',
    width: '85%',
  },
  profileImage: {
    width: heightPixel(91),
    height: heightPixel(91),
    borderRadius: heightPixel(91) / 2,
    marginBottom: vh * 1,
  },
  seprator: {
    height: 1,
    backgroundColor: colors.borderColor,
    width: '100%',
    marginBottom: vh * 1.5,
  },
  greetingText: {
    fontSize: font(12),
    color: colors.white,
    marginLeft: vw * 2.5,
    marginTop: heightPixel(5),
  },
  profileName: {
    fontSize: font(18),
    color: colors.white,
    marginLeft: vw * 2.5,
    textDecorationLine: 'underline',
  },
  menuItems: {
    marginHorizontal: vh * 2,
    width: '85%',
  },
  menuItem: {
    marginBottom: vh * 2,
    height: heightPixel(35),
    borderBottomWidth: 1,
    borderBottomColor: colors.white,
    width: '100%',
  },
  menuText: {
    fontSize: font(19),
    color: colors.white,
  },
  logoutButtonContainer: {
    marginTop: vh * 3,
    alignItems: 'center',
  },
  logoutButton: {
    width: widthPixel(207),
    borderColor: colors.primary,
    backgroundColor: colors.auth_button,
  },
  logoutText: {
    fontFamily: fonts.OpenSans.bold,
    color: colors.black,
  },
});

export default CustomDrawerContent;
