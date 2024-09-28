import {Formik} from 'formik';
import React, {useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import * as Yup from 'yup';
import AuthHeader from '../../component/authHeader';
import Button from '../../component/Button';
import Input from '../../component/Input';
import {ScreenWrapper} from '../../component/ScreenWrapper';
import CustomText from '../../component/Text';
import {vw} from '../../Utils/helpers';
import {navigationRef} from '../../Utils/navigation';
import styles from './style';
import Modal from '../../component/Modal';
import {icons} from '../../Assets/Images';
import colors from '../../Utils/colors';
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
  const [visible, setVisible] = useState(false);
  const handlePasswordRecovery = () => {
    setVisible(true);
  };

  return (
    <View style={styles.container}>
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
                label="New password"
                placeholder="Enter your password"
                value={values.password}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                type="password"
                required
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
                required
                // Use your email icon
              />
              {touched.Cnfrmpassword && errors.Cnfrmpassword && (
                <CustomText style={styles.error}>
                  {errors.Cnfrmpassword}
                </CustomText>
              )}

              {/* Continue Button */}
              <Button
                text="Updated"
                onPress={handleSubmit}
                style={styles.continueButton}
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
      <Modal
        open={visible}
        setOpen={setVisible}
        icon={icons.success}
        title="Congratulations!"
        text="Your password has been updated changed successfully. Use your new password to log in."
        buttons={[
          {
            text: 'Login',
            onPress: () => navigationRef.navigate('Signin'),
          },
        ]}
        headingStyle={{color: colors.black}}
      />
    </View>
  );
};

export default RecoverPassword;
