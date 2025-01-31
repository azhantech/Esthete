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
import useVerifyPasswordController from '../../Controllers/useVerifyPasswordController';
// Validation schema with Yup
const validationSchema = Yup.object({
  otp: Yup.string().required('Verification is required'),
});

const VerificationCode = () => {
  const handlePasswordRecovery = () => {
    navigationRef.navigate('RecoverPassword');
  };
  const {values: verifyValues, functions} = useVerifyPasswordController();

  return (
    <View style={styles.container}>
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
          initialValues={{otp: ''}}
          validationSchema={validationSchema}
          onSubmit={functions.handlePasswordRecovery}>
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
                value={values.otp}
                onChangeText={handleChange('otp')}
                onBlur={handleBlur('otp')}
                // Use your email icon
              />
              {touched.otp && errors.otp && (
                <CustomText style={styles.error}>{errors.otp}</CustomText>
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
                isLoading={verifyValues.isLoading}
              />
            </View>
          )}
        </Formik>
      </ScreenWrapper>

      {/* Back to Login Link */}
      <View style={styles.bottomContainer}>
        <CustomText>Back To - </CustomText>
        <TouchableOpacity onPress={() => navigationRef.navigate('Signin')}>
          <CustomText style={styles.loginText} weight="bold">
            Login
          </CustomText>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default VerificationCode;
