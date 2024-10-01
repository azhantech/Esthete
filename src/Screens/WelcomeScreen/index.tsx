import React from 'react';
import {View, Image} from 'react-native';
import {styles} from './styles';
import {ScreenWrapper} from '../../component/ScreenWrapper';
import {generalImages} from '../../Assets/Images';
import CustomText from '../../component/Text';
import {vh} from '../../Utils/helpers';
import Button from '../../component/Button';

const WelcomeScreen = () => {
  return (
    <ScreenWrapper scroll contentContainerStyle={{alignItems: 'center'}}>
      <Image source={generalImages.welcomeImage} style={styles.imageStyle} />
      <View
        style={{
          alignItems: 'center',
          marginTop: vh * 3,
          width: '70%',
          height: vh * 15,
          justifyContent: 'space-evenly',
        }}>
        <CustomText weight="bold" style={{fontSize: vh * 3}}>
          Welcome
        </CustomText>
        <CustomText
          weight="regular"
          style={{fontSize: vh * 1.5, textAlign: 'center'}}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Ipsum has been the industry's.
        </CustomText>
      </View>
      <Button
        text="Next"
        onPress={() => console.log('dfs')}
        style={{marginTop: vh}}
      />
    </ScreenWrapper>
  );
};

export default WelcomeScreen;
