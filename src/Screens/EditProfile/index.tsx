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
import useProfileController from '../../Controllers/useProfileController';
import {selectUser} from '../../Redux/Slices/user';
import {useSelector} from 'react-redux';
import {launchCamera} from 'react-native-image-picker';

const Schema = Yup.object().shape({
  full_name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  gender: Yup.string().required('Gender is required'),
});

export default function EditProfile() {
  const user = useSelector(selectUser);
  const {values: controllervalues, functions} = useProfileController();
  const [image, setImage] = React.useState<any>(
    user?.profile_image ? user?.profile_image : null,
  );
  const handleUploadImage = async () => {
    try {
      let options = {
        mediaType: 'photo',
        quality: 0.3,
        includeBase64: false,
        saveToPhotos: false,
      };

      const result = await launchCamera(options);
      if (result.assets && result.assets[0]) {
        let _res = result.assets[0];
        let _img = {
          uri: _res.uri,
          type: _res.type,
          name: _res.fileName,
        };
        setImage(_img);
      }
    } catch (e) {
      console.log('Error capturing image:', e);
    }
  };
  const handleEditProfile = (values: any) => {
    const data = {
      name: values.full_name,
      // email: values.email,
      gender: values.gender,
    };
    if (image?.uri) {
      data['profile_image'] = image;
    }
    functions.handleSubmit(data);
  };
  console.log(user);
  return (
    <ScreenWrapper
      scroll
      style={styles.container}
      contentContainerStyle={styles.scrollContainer}>
      <View style={styles.profileImageContainer}>
        <View style={styles.image_container}>
          <Image
            source={
              image?.uri
                ? {uri: image?.uri}
                : image
                ? {uri: `http://projectstagingzone.com:18001/${user?.profile_image}`}
                : dummyImages.profile
            }
            style={styles.profileImage}
          />
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.icon_button}
            onPress={handleUploadImage}>
            <Image source={icons.edit} />
          </TouchableOpacity>
        </View>
        <CustomText weight="semiBold" style={styles.user_name}>
          {user?.name}
        </CustomText>
        <CustomText weight="semiBold" style={styles.user_email}>
          {user?.email}
        </CustomText>
        <View style={styles.title_container}>
          <CustomText style={styles.title}>User Information</CustomText>
          <View style={styles.line} />
        </View>
      </View>
      <Formik
        initialValues={{
          full_name: user?.name ?? '',
          gender: user?.gender ?? 'Female',
          email: user?.email ?? '',
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
              editable={false}
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
              <CustomText style={styles.error}>{errors?.gender}</CustomText>
            )}

            <Button
              text="Save"
              onPress={handleSubmit}
              style={styles.editButton}
              isLoading={controllervalues.updateProfileLoader}
            />
          </View>
        )}
      </Formik>
    </ScreenWrapper>
  );
}
