import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {ScreenWrapper} from '../../component/ScreenWrapper';
import CustomText from '../../component/Text';
import Button from '../../component/Button';
import Input from '../../component/Input';
import {vw} from '../../Utils/helpers';
import AuthHeader from '../../component/authHeader';
import {navigationRef} from '../../Utils/navigation';
import styles from './styles';
import useForgotPasswordController from '../../Controllers/useForgotPasswordController';
// Validation schema with Yup
const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email').required('Email is required'),
});

const PasswordRecovery = props => {
  const handlePasswordRecovery = () => {
    // Handle the password recovery logic
    // console.log('Email entered:', values.email);
    navigationRef.navigate('VerificationCode');
  };
  const {
    validator,
    values: forgotPasswordValues,
    functions,
  } = useForgotPasswordController(props);
  return (
    <View style={styles.container}>
      <ScreenWrapper
        scroll
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
        <AuthHeader
          title={'Password Recovery'}
          subTitle={'Enter email address to get a verification code'}
        />

        {/* Formik Form */}
        <Formik
          initialValues={{email: ''}}
          validationSchema={validationSchema}
          onSubmit={functions.onSubmit}>
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
                width: vw * 80,
              }}>
              {/* Email Input */}
              <Input
                label="Enter Your Email Address"
                placeholder="Info@Example.Com"
                value={values.email}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
              />
              {touched.email && errors.email && (
                <CustomText style={styles.error}>{errors.email}</CustomText>
              )}

              {/* Continue Button */}
              <Button
                text="Continue"
                onPress={handleSubmit}
                style={styles.continueButton}
                isLoading={forgotPasswordValues.loading}
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

export default PasswordRecovery;
