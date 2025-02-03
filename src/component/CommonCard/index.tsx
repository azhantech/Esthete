import {Image, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import CustomText from '../Text';
import {icons} from '../../Assets/Images';
import {ICommonCard} from '../../Interfaces';
import Video from 'react-native-video';
import {heightPixel, widthPixel} from '../../Utils/helpers';
import colors from '../../Utils/colors';

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
      {is_video ? (
        <View style={[styles.image_container, {height: image_height}]}>
          <Video
            source={{uri: `http://projectstagingzone.com:18001/${item.videoUrl}`}}
            style={{
              height: '100%',
              width: '100%',
              backgroundColor: colors.black,
            }}
            paused={true}
            resizeMode="cover"
          />
          {<Image source={icons.play} style={styles.play_icon} />}
        </View>
      ) : (
        <View style={[styles.image_container, {height: image_height}]}>
          {item?.imageUrl && (
            <Image
              source={{
                uri: `http://projectstagingzone.com:18001/${item?.imageUrl}`,
              }}
              style={styles.product_image}
            />
          )}
          {/* { && <Image source={icons.play} style={styles.play_icon} />} */}
        </View>
      )}
      {item?.name && (
        <CustomText weight="semiBold" style={styles.name}>
          {item.name}
        </CustomText>
      )}
      {item?.description && (
        <CustomText style={styles.description}>{item?.description}</CustomText>
      )}
      {is_more_details && (
        <CustomText style={styles.more_details}>More Details</CustomText>
      )}
    </TouchableOpacity>
  );
}
