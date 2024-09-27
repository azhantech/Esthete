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
import styles from './styles';
// Validation schema with Yup
const validationSchema = Yup.object({
  email: Yup.string().required('Verification is required'),
});

const VerificationCode = () => {
  const handlePasswordRecovery = () => {
    navigationRef.navigate('RecoverPassword');
  };

  return (
    <ScreenWrapper
      scroll
      style={styles.container}
      contentContainerStyle={styles.contentContainer}>
      <AuthHeader
        title={'Password Recovery'}
        subTitle={
          'Please check your email for verification code. Your code is 6 digit in length'
        }
        subTitleStyle={{textAlign: 'center'}}
      />

      {/* Formik Form */}
      <Formik
        initialValues={{email: ''}}
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
              keyboardType="number-pad"
              label="Verification Code"
              placeholder="Enter verification code"
              value={values.email}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              // Use your email icon
            />
            {touched.email && errors.email && (
              <CustomText style={styles.error}>{errors.email}</CustomText>
            )}

            <CustomText
              weight="bold"
              style={styles.resendCode}
              onPress={() => console.log('Here')}>
              Resend Verification Code
            </CustomText>
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
          <CustomText style={styles.loginText} weight="bold">
            Login
          </CustomText>
        </TouchableOpacity>
      </View>
    </ScreenWrapper>
  );
};

export default VerificationCode;
