import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {ScreenWrapper} from '../../component/ScreenWrapper';
import CustomText from '../../component/Text';
import Input from '../../component/Input';
import Button from '../../component/Button';
import colors from '../../Utils/colors';
import {vh, vw} from '../../Utils/helpers';
import AuthHeader from '../../component/authHeader';
import {goBack, navigate, navigationRef} from '../../Utils/navigation';
import {useSignupMutation} from '../../Redux/Services/Auth';
import Toast from 'react-native-toast-message';

// Form validation schema using Yup
const SignUpSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  gender: Yup.string().required('gender is required'),
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
  const [signup, {data, isSuccess, isLoading, isError}] = useSignupMutation();

  const handleSignUp = async (values: any) => {
    // You can handle the signup logic here with form values

    const data = {
      name: values.name,
      email: values?.email,
      password: values?.password,
      phone: values?.phone,
      gender: values?.gender,
      role: 'user',
    };
    signup(data)
      .unwrap()
      .then(res => {
        console.log('Signup Response', res);
        if (!res?.error) {
          navigate('Signin');
        }
      })
      .catch(err => {
        Toast.show({
          text1: 'Error',
          text2: err?.data?.message,
          type: 'error',
        });

        console.log('Error from SIgnup -------->', err);
      });
    // navigationRef.navigate('QuestionnaireScreen');
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
            gender: '',
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
                label="Gender"
                placeholder="Enter Your gender"
                required
                value={values.gender}
                onChangeText={handleChange('gender')}
                onBlur={handleBlur('gender')}
              />
              {touched.gender && errors.gender && (
                <CustomText style={styles.error}>{errors.gender}</CustomText>
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
                isLoading={isLoading}
              />
            </View>
          )}
        </Formik>
      </KeyboardAwareScrollView>

      <TouchableOpacity
        style={styles.signupbtn}
        onPress={() => navigationRef.navigate('Signin')}>
        <CustomText>
          Already Have An Account?{' '}
          <CustomText style={styles.signUpText} weight="bold">
            Sign in
          </CustomText>
        </CustomText>
      </TouchableOpacity>
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
  signUpText: {
    color: colors.primary,
    textDecorationLine: 'underline',
  },

  signupbtn: {
    marginVertical: vh * 2.5,
  },
});

export default SignUpScreen;
