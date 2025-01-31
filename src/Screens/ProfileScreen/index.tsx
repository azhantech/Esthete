import {Image, TouchableOpacity, View} from 'react-native';
import React from 'react';
import CustomText from '../../component/Text';
import {ScreenWrapper} from '../../component/ScreenWrapper';
import styles from './styles';
import {dummyImages, icons} from '../../Assets/Images';
import Button from '../../component/Button';
import {navigate} from '../../Utils/navigation';
import useProfileController from '../../Controllers/useProfileController';
import {selectUser} from '../../Redux/Slices/user';
import {useSelector} from 'react-redux';
// {
//   id: '1',
//   icon: icons.profile_questionnaire,
//   name: 'Profile Questionnaire',
//   onPress: () => navigate('ProfileQuestionnaireNavigator'),
// },
const OPTIONS = [
  
  {
    id: '2',
    icon: icons.saved_products,
    name: 'Saved Products',
    onPress: () => navigate('SavedProductsNavigator'),
  },
  {
    id: '3',
    icon: icons.my_goals,
    name: 'My Goals',
    onPress: () => navigate('MyGoals'),
  },
  {
    id: '4',
    icon: icons.subscription_log,
    name: 'Subscription Log',
    onPress: () => navigate('SubscriptionLogs'),
  },
];

export default function ProfileScreen() {
  const navigateToEdit = () => navigate('EditProfile');
  const {values, functions} = useProfileController();
  const user = useSelector(selectUser);

  const renderOptions = ({id, icon, name, onPress}: any) => (
    <TouchableOpacity
      key={id}
      activeOpacity={0.7}
      onPress={onPress}
      style={styles.option}>
      <View style={styles.icon_container}>
        <Image source={icon} />
      </View>
      <CustomText style={styles.option_name}>{name}</CustomText>
      <Image source={icons.forward} />
    </TouchableOpacity>
  );

  return (
    <ScreenWrapper
      scroll
      style={styles.container}
      contentContainerStyle={styles.scrollContainer}>
      <View style={styles.profileImageContainer}>
        <Image
          source={
            user?.profile_image
              ? {uri: `https://projectstagingzone.com:18001/${user?.profile_image}`}
              : dummyImages.profile
          }
          style={styles.profileImage}
        />
        <CustomText weight="semiBold" style={styles.user_name}>
          {user?.name}
        </CustomText>
        <CustomText weight="semiBold" style={styles.user_email}>
          {user?.email}
        </CustomText>
      </View>
      <Button
        text="Edit Account"
        onPress={navigateToEdit}
        style={styles.editButton}
      />
      <View style={styles.options_container}>{OPTIONS.map(renderOptions)}</View>
    </ScreenWrapper>
  );
}
