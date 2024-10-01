import React from 'react';
import {TouchableOpacity, Image, View} from 'react-native';
import styles from './styles';
import {icons} from '../../Assets/Images';
import CustomText from '../Text';

const CircleImage = ({image, text, isSelected, onPress}: any) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={styles.mainContainer}>
      <View
        style={[
          styles.imageContainer,
          {
            borderWidth: isSelected ? 1 : 0,
          },
        ]}>
        <Image source={image} style={styles.image} />
        {isSelected && (
          <View style={styles.selectedContainer}>
            <Image source={icons.selectedImage} style={styles.selectedImage} />
          </View>
        )}
      </View>
      {text && <CustomText style={styles.text}>{text}</CustomText>}
    </TouchableOpacity>
  );
};

export default CircleImage;
