import React, {useState, useRef} from 'react';
import {View, TextInput, TouchableOpacity, Image} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {ScreenWrapper} from '../../component/ScreenWrapper';
import CustomText from '../../component/Text';

import Button from '../../component/Button';
import Input from '../../component/Input';
import {icons} from '../../Assets/Images';
import {vh, vw, width} from '../../Utils/helpers';
import colors from '../../Utils/colors';
import AuthHeader from '../../component/authHeader';
import {navigationRef} from '../../Utils/navigation';

// Validation schema with Yup
const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

const LoginScreen = () => {
  const [showPassword, setShowPassword] = useState(false);
  const passwordInputRef = useRef<TextInput>(null); // Create a ref for the password input field

  const handleSignIn = (values: {email: string; password: string}) => {
    // Handle sign-in logic here
    // navigationRef.navigate('PasswordRecovery');
    console.log('Form values:', values);
    navigationRef.navigate('DrawerNavigator');
  };
  const socialLogin = [
    {id: 1, icons: icons.facebook},
    {id: 2, icons: icons.google},
    {id: 3, icons: icons.apple},
  ];
  return (
    <ScreenWrapper
      scroll
      style={styles.container}
      contentContainerStyle={{
        alignItems: 'center',
      }}>
      <KeyboardAwareScrollView contentContainerStyle={styles.scrollContainer}>
        <AuthHeader title={'Login to your account'} />
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
                right={icons.emailIcon}
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
                <TouchableOpacity>
                  <Image
                    source={icons.rememberMeCheckBox}
                    style={styles.rememberMe}
                  />
                </TouchableOpacity>
                <CustomText style={{marginLeft: 10}}>Remember Me</CustomText>
              </View>

              {/* Sign In Button */}
              <Button
                text="Sign In"
                onPress={handleSubmit}
                style={styles.btn}
              />

              {/* Forgot Password */}
              <TouchableOpacity
                onPress={() => navigationRef.navigate('PasswordRecovery')}>
                <CustomText style={styles.forgotText}>
                  Forgot Your Password?
                </CustomText>
              </TouchableOpacity>
            </View>
          )}
        </Formik>

        {/* Or Continue With */}
        <View style={{alignItems: 'center', marginVertical: 20}}>
          <CustomText weight="bold">Or Continue With</CustomText>
          <View style={styles.socialIcons}>
            {socialLogin.map(val => (
              <View style={styles.socialIconContainer} key={val?.id}>
                <Image
                  source={val?.icons}
                  key={val?.id}
                  style={styles.socialImg}
                />
              </View>
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
          <CustomText style={styles.signUpText}>Sign Up</CustomText>
        </CustomText>
      </TouchableOpacity>
    </ScreenWrapper>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  scrollContainer: {
    flexGrow: 1,
    width: vw * 85,
  },
  rememberMeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  rememberMe: {
    height: vh * 4,
    width: vw * 4,
    resizeMode: 'contain',
  },
  error: {
    color: colors.red,
    marginTop: 5,
    marginBottom: 10,
    width: vw * 85,
  },
  forgotText: {
    color: 'red',
    textAlign: 'center',
    marginTop: 10,
    textDecorationLine: 'underline',
  },
  socialIcons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
    height: vh * 7,
    marginTop: vh * 2.5,
  },
  socialImg: {
    height: vh * 5,
    width: vw * 5,
    resizeMode: 'contain',
  },
  socialIconContainer: {
    width: '28%',
    borderWidth: 1,
    borderColor: colors.gray,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  signUpText: {
    color: 'red',
    textDecorationLine: 'underline',
  },
  btn: {
    alignSelf: 'center',
    marginVertical: vh * 2.5,
  },
  signupbtn: {
    marginVertical: vh * 2.5,
  },
};

export default LoginScreen;
