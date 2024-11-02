import React from 'react';
import {styles} from './styles';
import {ScreenWrapper} from '../../component/ScreenWrapper';
import HomeHeader from '../../component/HomeHeader';
import {dummyImages} from '../../Assets/Images';
import {FlatList, View} from 'react-native';
import RecommendationCard from '../../component/RecommendationCard';
import {navigate} from '../../Utils/navigation';
import { heightPixel } from '../../Utils/helpers';

const PRODUCTS = [
  {
    id: '1',
    image: dummyImages.product_1,
    name: 'Product Recommendation',
    type: 'Face Peel',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
    brand: 'Brand A',
    purchase_link: 'www.abc.com',
    recommendation_on: 'Profile Questionnaire',
  },
  {
    id: '2',
    image: dummyImages.product_2,
    name: 'Facial Mask Lightening',
    type: 'Face Peel',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
    brand: 'Brand A',
    purchase_link: 'www.abc.com',
    recommendation_on: 'Profile Questionnaire',
  },
];

const ProductRecommendation = () => {
  const onPressProduct = (item: any) => {
    const _item = Object.assign({}, item);
    delete _item.name;
    navigate('ProductDetail', {item: _item});
  };

  const renderItems = ({item}: any) => (
    <RecommendationCard item={item} onPress={onPressProduct.bind(null, item)} />
  );

  const renderSeperator = () => <View style={styles.seperator} />;

  return (
    <ScreenWrapper
      mainContainerStyles={styles.container}
      scroll
      contentContainerStyle={{
        alignItems: 'center',
        paddingBottom: heightPixel(150)
      }}>
      {/* Common Header */}
      <HomeHeader />

      {/* Recommendations List */}
      <FlatList
        data={PRODUCTS}
        keyExtractor={item => item.id}
        renderItem={renderItems}
        ItemSeparatorComponent={renderSeperator}
      />
    </ScreenWrapper>
  );
};

export default ProductRecommendation;
