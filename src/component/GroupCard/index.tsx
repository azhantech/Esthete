import React, {FC} from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import CustomText from '../Text';
import {styles} from './styles';
import {GroupCardProps} from '../../Interfaces';
import Button from '../Button';
import {icons} from '../../Assets/Images';

const GroupCard: FC<GroupCardProps> = ({
  image,
  title,
  description,
  onJoin,
  imageContainer,
  rating,
  common,
  groupType,
  cardContainer,
}) => {
  return (
    <View style={[styles.cardContainer, cardContainer]}>
      {rating && <Image source={icons.rating} style={styles.ratingImage} />}
      <View style={[styles.imageContainer, imageContainer]}>
        <Image source={image} style={styles.image} />
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.row}>
          <CustomText weight="semiBold" style={styles.title}>
            {title}
            {groupType && (
              <CustomText weight="semiBold" style={styles.highlightedTitle}>
                {` ${groupType}`}
              </CustomText>
            )}
          </CustomText>
        </View>
        <CustomText weight="regular" style={styles.description}>
          {description}
        </CustomText>
        {!common && (
          <Button
            onPress={onJoin}
            text="Join"
            style={styles.joinButton}
            textStyle={styles.btnText}
          />
        )}
      </View>
    </View>
  );
};

export default GroupCard;
