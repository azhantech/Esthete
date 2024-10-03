import {Image, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import CustomText from '../Text';
import {icons} from '../../Assets/Images';
import {ICommonCard} from '../../Interfaces';

export default function CommonCard({
  item,
  onPress,
  image_height,
  is_video,
  is_more_details,
}: ICommonCard) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      disabled={!onPress}
      onPress={onPress}
      style={styles.container}>
      <View style={[styles.image_container, {height: image_height}]}>
        <Image source={item?.image} style={styles.product_image} />
        {is_video && <Image source={icons.play} style={styles.play_icon} />}
      </View>
      {item?.name && (
        <CustomText weight="semiBold" style={styles.name}>
          {item.name}
        </CustomText>
      )}
      <CustomText style={styles.description}>{item.description}</CustomText>
      {is_more_details && (
        <CustomText style={styles.more_details}>More Details</CustomText>
      )}
    </TouchableOpacity>
  );
}
