import React from 'react';
import {TouchableOpacity, Image, Text, View} from 'react-native';
import {vw, vh} from '../../Utils/helpers'; // Assuming you have these helpers
import colors from '../../Utils/colors'; // Assuming colors file exists
import styles from './styles';
import {icons} from '../../Assets/Images';
import CustomText from '../Text';
const CircleImage = ({image, text, isSelected, onPress}: any) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.mainContainer}>
      <View
        style={[
          styles.imageContainer,
          {
            borderColor: isSelected ? colors.primary : colors.red,
          },
        ]}>
        <Image source={image} style={styles.image} />
        {isSelected && (
          <View style={styles.selectedContainer}>
            <Image source={icons.selectedImage} style={styles.selectedImage} />
          </View>
        )}
      </View>
      <CustomText>{text}</CustomText>
    </TouchableOpacity>
  );
};

export default CircleImage;
