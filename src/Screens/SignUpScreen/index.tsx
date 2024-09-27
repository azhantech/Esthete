import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {ScreenWrapper} from '../../component/ScreenWrapper';
import CustomText from '../../component/Text';
import Input from '../../component/Input';
import Button from '../../component/Button';
import colors from '../../Utils/colors';
import {vh, vw, width} from '../../Utils/helpers';
import {generalImages} from '../../Assets/Images';
import AuthHeader from '../../component/authHeader';
import {navigationRef} from '../../Utils/navigation';

// Form validation schema using Yup
const SignUpSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  age: Yup.number().required('Age is required').positive().integer(),
  email: Yup.string().email('Invalid email').required('Email is required'),
  phone: Yup.string().required('Phone is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm password is required'),
});

const SignUpScreen = () => {
  const handleSignUp = (values: any) => {
    // You can handle the signup logic here with form values
    console.log(values);
    navigationRef.navigate('QuestionnaireScreen');
  };

  return (
    <ScreenWrapper
      scroll
      style={styles.container}
      contentContainerStyle={{
        alignItems: 'center',
      }}>
      <AuthHeader title="Create Account" />
      <KeyboardAwareScrollView
        contentContainerStyle={styles.scrollContainer}
        enableOnAndroid={true}>
        <Formik
          initialValues={{
            name: '',
            age: '',
            email: '',
            phone: '',
            password: '',
            confirmPassword: '',
          }}
          validationSchema={SignUpSchema}
          onSubmit={values => handleSignUp(values)}>
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

              <Input
                label="Password"
                placeholder="Enter Password"
                required
                type="password" // You can use your secure field toggle here
                value={values.password}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
              />
              {touched.password && errors.password && (
                <CustomText style={styles.error}>{errors.password}</CustomText>
              )}

              <Input
                label="Confirm Password"
                placeholder="Enter Confirm Password"
                required
                type="password" // Same toggle functionality for confirm password
                value={values.confirmPassword}
                onChangeText={handleChange('confirmPassword')}
                onBlur={handleBlur('confirmPassword')}
              />
              {touched.confirmPassword && errors.confirmPassword && (
                <CustomText style={styles.error}>
                  {errors.confirmPassword}
                </CustomText>
              )}

              <Button
                text="Sign Up"
                onPress={handleSubmit}
                style={styles.signUpButton}
              />
            </View>
          )}
        </Formik>
      </KeyboardAwareScrollView>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  scrollContainer: {
    flexGrow: 1,
    width: vw * 85,
  },
  signUpButton: {
    marginVertical: 20,
    backgroundColor: colors.primary,
    width: vw * 85,
  },
  error: {
    color: colors.red,
    marginTop: 5,
    marginBottom: 10,
    width: vw * 85,
  },
});

export default SignUpScreen;
