import {Image, TouchableOpacity, View} from 'react-native';
import React from 'react';
import CustomText from '../../component/Text';
import {ScreenWrapper} from '../../component/ScreenWrapper';
import styles from './styles';
import {dummyImages, icons} from '../../Assets/Images';
import Input from '../../component/Input';
import Button from '../../component/Button';
import Dropdown from '../../component/Dropdown';
import {Formik} from 'formik';
import * as Yup from 'yup';

const Schema = Yup.object().shape({
  full_name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  gender: Yup.string().required('Gender is required'),
});

export default function EditProfile() {
  const handleEditProfile = (values: any) => {
    console.log(values);
  };

  return (
    <ScreenWrapper
      scroll
      style={styles.container}
      contentContainerStyle={styles.scrollContainer}>
      <View style={styles.profileImageContainer}>
        <View style={styles.image_container}>
          <Image source={dummyImages.profile} style={styles.profileImage} />
          <TouchableOpacity activeOpacity={0.7} style={styles.icon_button}>
            <Image source={icons.edit} />
          </TouchableOpacity>
        </View>
        <CustomText weight="semiBold" style={styles.user_name}>
          User12345
        </CustomText>
        <CustomText weight="semiBold" style={styles.user_email}>
          user123@gmail.com
        </CustomText>
        <View style={styles.title_container}>
          <CustomText style={styles.title}>User Information</CustomText>
          <View style={styles.line} />
        </View>
      </View>
      <Formik
        initialValues={{
          full_name: '',
          gender: 'Female',
          email: '',
        }}
        validationSchema={Schema}
        onSubmit={values => handleEditProfile(values)}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <View>
            <Input
              label="Full Name"
              placeholder="Enter Your Full Name"
              required
              value={values.full_name}
              onChangeText={handleChange('full_name')}
              onBlur={handleBlur('full_name')}
            />
            {touched.full_name && errors.full_name && (
              <CustomText style={styles.error}>{errors.full_name}</CustomText>
            )}

            <Input
              label="Email"
              placeholder="Enter Your Email"
              required
              value={values.email}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              keyboardType="email-address"
            />
            {touched.email && errors.email && (
              <CustomText style={styles.error}>{errors.email}</CustomText>
            )}

            <Dropdown
              label="Gender"
              placeholder="Female"
              required
              value={values.gender}
              onChangeText={handleChange('gender')}
              onBlur={handleBlur('gender')}
            />
            {touched.gender && errors.gender && (
              <CustomText style={styles.error}>{errors.gender}</CustomText>
            )}

            <Button
              text="Save"
              onPress={handleSubmit}
              style={styles.editButton}
            />
          </View>
        )}
      </Formik>
    </ScreenWrapper>
  );
}
