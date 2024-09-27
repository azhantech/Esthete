import { Image, TouchableOpacity, View } from 'react-native';
import React from 'react';
import CustomText from '../../component/Text';
import { ScreenWrapper } from '../../component/ScreenWrapper';
import styles from './styles';
import { dummyImages, icons } from '../../Assets/Images';
import Input from '../../component/Input';
import Button from '../../component/Button';
import Dropdown from '../../component/Dropdown';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Modal from '../../component/Modal';
import { goBack } from '../../Utils/navigation';
import colors from '../../Utils/colors';
import useToggle from '../../Hooks/useToggle';

const Schema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  age: Yup.number().required('Age is required').positive().integer(),
  email: Yup.string().email('Invalid email').required('Email is required'),
  phone: Yup.string().required('Phone is required'),
  status: Yup.string().required('Status is required')
});

export default function EditProfile() {

  const [open, setOpen, toggle] = useToggle()

  const handleEditProfile = (values: any) => {
    console.log(values);
    toggle()
  };

  return (
    <ScreenWrapper
      scroll
      style={styles.container}
      contentContainerStyle={styles.scrollContainer}>
      <CustomText weight='bold' style={styles.title}>Edit Profile</CustomText>
      <View style={styles.profileImageContainer}>
        <Image source={dummyImages.dummyProfile} style={styles.profileImage} />
        <CustomText weight='bold' style={styles.title}>Lucy Green</CustomText>
        <View style={styles.moodContainer}>
          <CustomText weight='bold' style={styles.happy}>Happy</CustomText>
        </View>
        <TouchableOpacity style={styles.editImageButton}>
          <Image source={icons.edit} />
        </TouchableOpacity>
      </View>

      <Formik
        initialValues={{
          name: '',
          age: '',
          email: '',
          phone: '',
          status: 'Happy',
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
              label="Name"
              placeholder="Enter Your Name"
              required
              value={values.name}
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')}
            />
            {touched.name && errors.name && (
              <CustomText style={styles.error}>{errors.name}</CustomText>
            )}

            <Input
              label="Age"
              placeholder="Enter Your Age"
              required
              value={values.age}
              onChangeText={handleChange('age')}
              onBlur={handleBlur('age')}
              keyboardType="numeric"
            />
            {touched.age && errors.age && (
              <CustomText style={styles.error}>{errors.age}</CustomText>
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

            <Input
              label="Phone"
              placeholder="Enter Your Phone"
              required
              value={values.phone}
              onChangeText={handleChange('phone')}
              onBlur={handleBlur('phone')}
              keyboardType="phone-pad"
            />
            {touched.phone && errors.phone && (
              <CustomText style={styles.error}>{errors.phone}</CustomText>
            )}

            <Dropdown
              label="Status"
              placeholder="Happy"
              required
              value={values.status}
              onChangeText={handleChange('status')}
              onBlur={handleBlur('status')}
            />
            {touched.status && errors.status && (
              <CustomText style={styles.error}>{errors.status}</CustomText>
            )}


            <Button
              text="Update"
              onPress={handleSubmit}
              style={styles.editButton}
            />
          </View>
        )}
      </Formik>
      <Modal
        open={open}
        setOpen={setOpen}
        icon={icons.pop_up_success}
        title="Your Profile Has Been Updated Successfully."
        buttons={[{ text: "Ok", onPress: goBack }]}
        headingStyle={{ color: colors.black }}
      />
    </ScreenWrapper>
  );
}
