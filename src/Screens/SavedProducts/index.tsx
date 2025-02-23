import React from 'react';
import {styles} from './styles';
import {ScreenWrapper} from '../../component/ScreenWrapper';
import HomeHeader from '../../component/HomeHeader';
import {dummyImages} from '../../Assets/Images';
import {FlatList, View} from 'react-native';
import RecommendationCard from '../../component/RecommendationCard';
import {navigate} from '../../Utils/navigation';
import {
  useGetRecommendationProductsQuery,
  useSaveProductQuery,
} from '../../Redux/Services/User';

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
    isSaved: true,
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
    isSaved: true,
  },
];

const SavedProducts = () => {
  const {data, isLoading, isError, refetch} = useSaveProductQuery({});

  console.log('data', data);
  const onPressProduct = (item: any) => {
    const _item = Object.assign({}, item);
    delete _item.name;
    navigate('SavedProductDetail', {item: _item});
  };

  const renderItems = ({item}: any) => {
    console.log('item', item?.productId);
    return (
      <RecommendationCard
        item={item?.productId}
        onPress={onPressProduct.bind(null, item)}
      />
    );
  };

  const renderSeperator = () => <View style={styles.seperator} />;

  return (
    <ScreenWrapper mainContainerStyles={styles.container}>
      <FlatList
        data={data?.data ?? []}
        keyExtractor={item => item?.productId?._id}
        renderItem={renderItems}
        ItemSeparatorComponent={renderSeperator}
      />
    </ScreenWrapper>
  );
};

export default SavedProducts;
