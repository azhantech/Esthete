import {View} from 'react-native';
import React from 'react';
import CustomText from '../Text';
import {styles} from './styles';

export default function HomeHeader() {
  return (
    <View style={styles.container}>
      <CustomText weight="semiBold" style={styles.we_beauty}>
        We Beauty
      </CustomText>
      <CustomText style={styles.brown_text}>
        Because Your Skin & Hair Deserves The Best Care.
      </CustomText>
    </View>
  );
}
