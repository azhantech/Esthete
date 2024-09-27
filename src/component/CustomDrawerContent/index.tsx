import React, { useState } from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import CustomText from '../../component/Text'; // Assuming this is your custom text component
import Button from '../../component/Button'; // Assuming you have a reusable button component
import colors from '../../Utils/colors';
import { vh, vw } from '../../Utils/helpers';
import { drawerIcon, dummyImages, icons } from '../../Assets/Images'; // For the user image or any icons
import { navigateAndReplace, navigationRef } from '../../Utils/navigation';
import Modal from '../Modal';
import useToggle from '../../Hooks/useToggle';

const CustomDrawerContent = (props: any) => {
  const [open, setOpen, toggle] = useToggle()
  const [selected, setSelected] = React.useState<number | null>(1);
  console.log('props.state.index ==>', props.state.index);

  const handleLogout = () => {
    setOpen(!open);
    navigateAndReplace('AuthNavigator')
  };
  const drawer = [
    {
      id: 1,
      name: 'Home',
      route: 'BottomNavigator',
      icon: drawerIcon.drawerHome,
    },
    {
      id: 2,
      name: 'My Profile',
      route: 'BottomNavigator',
      inner_route: 'ProfileScreen',
      icon: drawerIcon.profileIcon,
    },
    {
      id: 3,
      name: 'Subscription Logs',
      route: 'SubscriptionLogs',
      icon: drawerIcon.subscriptionLogsIcon,
    },
    {
      id: 4,
      name: 'Contact Us',
      route: 'Contactus',
      icon: drawerIcon.contactUsIcon,
    },
    {
      id: 5,
      name: 'Terms & Conditions',
      route: 'Terms',
      icon: drawerIcon.termsAndCondition,
    },
    { id: 6, name: 'About Us', route: 'AboutUs', icon: drawerIcon.aboutUsIcon },
    {
      id: 7,
      name: 'Privacy Policy',
      route: 'PrivacyPolicy',
      icon: drawerIcon.privacyPolicyIcon,
    },
  ];
  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={styles.container}>
      {/* Profile Section */}
      <View style={styles.profileSection}>
        <Image
          source={dummyImages.dummyProfile} // Replace with actual user image
          style={styles.profileImage}
        />
        <CustomText style={styles.greetingText}>Hello There!</CustomText>
      </View>
      <View style={styles.seprator} />

      {/* Menu Items */}
      <View style={styles.menuItems}>
        {drawer.map((val, index) => {
          return (
            <TouchableOpacity
              key={val?.id.toString()}
              style={styles.menuItem}
              onPress={() => {
                setSelected(val?.id);
                if (val?.inner_route) {
                  navigationRef.navigate(val?.route, { screen: val?.inner_route });
                } else {
                  navigationRef.navigate(val?.route);
                }
              }}>
              <View
                style={[
                  styles.iconContainer,
                  {
                    borderColor:
                      selected === val?.id ? colors.red : colors.borderColor,
                  },
                ]}>
                <Image source={val?.icon} style={styles.icon} />
              </View>
              <CustomText style={styles.menuText} weight="regular">
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
        />
      </View>
      <Modal
        open={open}
        setOpen={setOpen}
        text="Are You Sure You Want To Logout"
        buttons={[
          { text: 'Yes', onPress: handleLogout },
          { text: 'No', onPress: toggle },
        ]}
        row
        headingStyle={{ color: colors.black }}
        icon={icons.pop_up_success}
      />
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: vw * 5,
  },
  profileSection: {
    alignItems: 'center',
    marginVertical: vh * 2,
    flexDirection: 'row',
    width: vw * 80,
    alignSelf: 'center',
  },
  profileImage: {
    width: vw * 30,
    height: vw * 30,
    borderRadius: vw * 15,
    marginBottom: vh * 1,
  },
  seprator: {
    height: 1,
    backgroundColor: colors.borderColor,
    width: '100%',
    marginBottom: vh * 1.5,
  },
  greetingText: {
    fontSize: vh * 2.5,
    fontWeight: 'bold',
    color: colors.black,
    marginLeft: vw * 2.5,
    textDecorationLine: 'underline',
  },
  nameText: {
    fontSize: 14,
    color: colors.gray,
  },
  menuItems: {
    marginTop: vh * 2,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  menuItem: {
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: vh * 2,
    width: '50%',
  },
  icon: {
    // width: vw * 7,
    // height: vw * 7,
    // marginHorizontal: vw * 3,
    height: '50%',
    width: '50%',
    resizeMode: 'contain',
  },
  iconContainer: {
    borderRadius: (vh * 12) / 2,
    width: vh * 12,
    height: vh * 12,
    borderWidth: 1,
    borderColor: colors.borderColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuText: {
    fontSize: vh * 2,
    color: colors.black,
    marginTop: 7,
  },
  logoutButtonContainer: {
    marginTop: vh * 3,
    alignItems: 'center',
  },
  logoutButton: {
    width: vw * 75,
    backgroundColor: colors.primary,
  },
});

export default CustomDrawerContent;
