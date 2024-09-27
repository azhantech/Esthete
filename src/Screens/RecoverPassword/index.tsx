import React, {useState} from 'react';
import {View, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {ScreenWrapper} from '../../component/ScreenWrapper';
import CustomText from '../../component/Text';
import Button from '../../component/Button';
import Input from '../../component/Input';
import {icons} from '../../Assets/Images';
import {vh, vw} from '../../Utils/helpers';
import colors from '../../Utils/colors';
import AuthHeader from '../../component/authHeader';
import {navigationRef} from '../../Utils/navigation';

// Validation schema with Yup
const validationSchema = Yup.object({
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
  Cnfrmpassword: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Re-write your password'),
});

const RecoverPassword = () => {
  const [email, setEmail] = useState('');

  const handlePasswordRecovery = () => {
    // Handle the password recovery logic
    // console.log('Email entered:', values.email);
    navigationRef.navigate('Signin');
  };

  return (
    <ScreenWrapper
      scroll
      style={styles.container}
      contentContainerStyle={styles.contentContainer}>
      <AuthHeader title={'Password Recovery'} />
      {/* Formik Form */}
      <Formik
        initialValues={{password: '', Cnfrmpassword: ''}}
        validationSchema={validationSchema}
        onSubmit={handlePasswordRecovery}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <View
            style={{
              width: vw * 90,
            }}>
            {/* Email Input */}
            <Input
              label="New password*"
              placeholder="Enter your password"
              value={values.password}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              type="password"
            />
            {touched.password && errors.password && (
              <CustomText style={styles.error}>{errors.password}</CustomText>
            )}
            <Input
              label="Confirm password"
              placeholder="Confirm password"
              value={values.Cnfrmpassword}
              onChangeText={handleChange('Cnfrmpassword')}
              onBlur={handleBlur('Cnfrmpassword')}
              type="password"
              // Use your email icon
            />
            {touched.Cnfrmpassword && errors.Cnfrmpassword && (
              <CustomText style={styles.error}>
                {errors.Cnfrmpassword}
              </CustomText>
            )}

            {/* Continue Button */}
            <Button
              text="Continue"
              onPress={handleSubmit}
              style={styles.continueButton}
            />
          </View>
        )}
      </Formik>

      {/* Back to Login Link */}
      <View style={styles.bottomContainer}>
        <CustomText>Back To - </CustomText>
        <TouchableOpacity onPress={() => navigationRef.navigate('Signin')}>
          <CustomText style={styles.loginText}>Login</CustomText>
        </TouchableOpacity>
      </View>
    </ScreenWrapper>
  );
};

export default RecoverPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  contentContainer: {
    alignItems: 'center',
    paddingVertical: vh * 2,
  },
  logo: {
    width: vw * 60,
    height: vh * 20,
    resizeMode: 'contain',
    marginBottom: vh * 3,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.black,
  },
  subtitle: {
    fontSize: vh * 1.8,
    color: colors.gray,
    width: vw * 90,
    marginTop: -vh,
  },
  error: {
    color: colors.red,
    marginTop: vh * 1,
    marginBottom: vh * 1,
  },
  continueButton: {
    alignSelf: 'center',
    marginTop: vh * 3,
    width: vw * 80,
  },
  bottomContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: vh * 4,
  },
  loginText: {
    color: colors.red,
    textDecorationLine: 'underline',
  },
});
