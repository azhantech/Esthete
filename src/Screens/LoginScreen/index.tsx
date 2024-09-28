import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {ScreenWrapper} from '../../component/ScreenWrapper';
import CustomText from '../../component/Text';

import Button from '../../component/Button';
import Input from '../../component/Input';
import {icons} from '../../Assets/Images';
import AuthHeader from '../../component/authHeader';
import {navigationRef} from '../../Utils/navigation';
import styles from './styles';
import Seprator from '../../component/Seprator';
// Validation schema with Yup
const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

const LoginScreen = () => {
  const handleSignIn = (values: {email: string; password: string}) => {
    navigationRef.navigate('DrawerNavigator');
  };
  const socialLogin = [
    {id: 2, icons: icons.google, txt: 'Continue With Google'},
    {id: 3, icons: icons.apple, txt: 'Continue With Apple'},
  ];
  return (
    <ScreenWrapper
      scroll
      style={styles.container}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        alignItems: 'center',
      }}>
      <KeyboardAwareScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}>
        <AuthHeader title={'Your Journey Start Here!'} />
        <Formik
          initialValues={{email: '', password: ''}}
          validationSchema={validationSchema}
          onSubmit={handleSignIn}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <View>
              {/* Email Input */}
              <Input
                label="Email"
                placeholder="Enter Your email"
                required
                value={values.email}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                // right={icons.emailIcon}
              />
              {touched.email && errors.email && (
                <CustomText style={styles.error}>{errors.email}</CustomText>
              )}

              {/* Password Input */}
              <Input
                label="Password"
                placeholder="Enter Your Password"
                required
                value={values.password}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                type="password"
              />
              {touched.password && errors.password && (
                <CustomText style={styles.error}>{errors.password}</CustomText>
              )}

              {/* Remember Me */}
              <View style={styles.rememberMeContainer}>
                <TouchableOpacity
                  onPress={() => navigationRef.navigate('PasswordRecovery')}>
                  <CustomText style={{marginLeft: 10}}>
                    Forgot Your Password?
                  </CustomText>
                </TouchableOpacity>
              </View>

              {/* Sign In Button */}
              <Button
                text="Sign In"
                onPress={handleSubmit}
                style={styles.btn}
              />
            </View>
          )}
        </Formik>
        <Seprator txt={'or use'} />
        <View style={{alignItems: 'center'}}>
          <View style={styles.socialIcons}>
            {socialLogin.map(val => (
              <Button
                text={val?.txt}
                icon={val?.icons}
                key={val?.id}
                style={styles.socialLoginBtn}
                textStyle={styles.socialBtnTxt}
                onPress={() => console.log('Here')}
              />
            ))}
          </View>
        </View>

        {/* Sign Up Link */}
      </KeyboardAwareScrollView>
      <TouchableOpacity
        style={styles.signupbtn}
        onPress={() => navigationRef.navigate('Signup')}>
        <CustomText>
          Don't Have An Account?{' '}
          <CustomText style={styles.signUpText} weight="bold">
            Sign Up
          </CustomText>
        </CustomText>
      </TouchableOpacity>
    </ScreenWrapper>
  );
};

export default LoginScreen;
