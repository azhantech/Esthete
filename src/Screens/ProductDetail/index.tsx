import React from 'react';
import {styles} from './styles';
import {ScreenWrapper} from '../../component/ScreenWrapper';
import RecommendationCard from '../../component/RecommendationCard';
import CustomText from '../../component/Text';
import {View} from 'react-native';
import Button from '../../component/Button';

const ProductDetail = ({route}: any) => {
  const item = route?.params?.item;

  return (
    <ScreenWrapper mainContainerStyles={styles.container}>
      <RecommendationCard item={item} />

      <View style={styles.content_view}>
        <CustomText weight="semiBold" style={styles.label}>
          Ingredients
        </CustomText>
        <CustomText style={styles.value}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </CustomText>
        <CustomText style={styles.value}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text.
        </CustomText>
        <CustomText weight="semiBold" style={styles.label}>
          Benefits
        </CustomText>
        <CustomText style={styles.value}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </CustomText>

        <View style={styles.button_view}>
          <View style={styles.button_container}>
            <Button text="Accept" onPress={() => {}} />
          </View>
          <View style={styles.button_container}>
            <Button
              text="Reject"
              onPress={() => {}}
              style={styles.button}
              textStyle={styles.button_text}
            />
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default ProductDetail;
