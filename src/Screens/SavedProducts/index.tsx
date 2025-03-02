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
        item={item}
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
