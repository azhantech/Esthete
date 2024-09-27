import { Image, TouchableOpacity, View } from 'react-native';
import React from 'react';
import CustomText from '../../component/Text';
import { ScreenWrapper } from '../../component/ScreenWrapper';
import styles from './styles';
import { dummyImages } from '../../Assets/Images';
import Input from '../../component/Input';
import Button from '../../component/Button';
import Dropdown from '../../component/Dropdown';
import { navigate } from '../../Utils/navigation';

export default function ProfileScreen() {
  const navigateToEdit = () => navigate('EditProfile')
  const navigateToChangePassword = () => navigate('ChangePassword')

  return (
    <ScreenWrapper
      scroll
      style={styles.container}
      contentContainerStyle={styles.scrollContainer}>
      <CustomText weight='bold' style={styles.title}>My Profile</CustomText>
      <View style={styles.profileImageContainer}>
        <Image source={dummyImages.dummyProfile} style={styles.profileImage} />
        <CustomText weight='bold' style={styles.title}>Lucy Green</CustomText>
        <View style={styles.moodContainer}>
          <CustomText weight='bold' style={styles.happy}>Happy</CustomText>
        </View>
      </View>

      <Input
        label="Name"
        placeholder="Enter Your Name"
        required
        editable={false}
      />

      <Input
        label="Age"
        placeholder="Enter Your Age"
        required
        editable={false}
      />

      <Input
        label="Email"
        placeholder="Enter Your Email"
        required
        editable={false}
        editable={false}
      />

      <Input
        label="Phone"
        placeholder="Enter Your Phone"
        required
        editable={false}
      />

      <Dropdown
        label="Status"
        placeholder="Happy"
        required
        disabled
      />

      <Button
        text="Edit Profile"
        onPress={navigateToEdit}
        style={styles.editButton}
      />

      <TouchableOpacity onPress={navigateToChangePassword} activeOpacity={0.7} style={styles.changePasswordBtn}>
        <CustomText style={styles.changePasswordText}>Change Password</CustomText>
      </TouchableOpacity>
    </ScreenWrapper>
  );
}
