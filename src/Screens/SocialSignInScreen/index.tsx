import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {icons} from '../../Assets/Images';
import Button from '../../component/Button';
import {ScreenWrapper} from '../../component/ScreenWrapper';
import CustomText from '../../component/Text';
import {styles} from './styles';
import {navigationRef} from '../../Utils/navigation';

const SocialSignInScreen = () => {
  return (
    <ScreenWrapper
      style={{flex: 1}}
      contentContainerStyle={styles.container}
      scroll>
      <View>
        {/* <Image source={generalImages.socialLoginImage} style={styles.image} /> */}
      </View>
      <CustomText weight="bold" style={styles.title}>
        Let's You In
      </CustomText>

      <Button
        onPress={() => console.log('Google Sign-In')}
        text="continue with Google"
        style={styles.googleButton}
        textStyle={styles.textStyle}
        icon={icons.google}
      />

      <Button
        onPress={() => console.log('Google Sign-In')}
        text="continue with Apple"
        style={styles.googleButton}
        textStyle={styles.textStyle}
        icon={icons.apple}
      />
      <CustomText weight="bold" style={styles.orText}>
        OR
      </CustomText>
      <Button
        onPress={() => navigationRef.navigate('Signin')}
        text="Sign In With Password"
        style={styles.passwordButton}
      />
      <View style={styles.signUpWrapper}>
        <CustomText weight="regular">Don't Have An Account?</CustomText>
        <TouchableOpacity onPress={() => navigationRef.navigate('Signup')}>
          <CustomText weight="bold" style={styles.signUpText}>
            Sign Up
          </CustomText>
        </TouchableOpacity>
      </View>
    </ScreenWrapper>
  );
};

export default SocialSignInScreen;
