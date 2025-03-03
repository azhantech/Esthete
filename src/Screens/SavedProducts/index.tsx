import React, {useEffect} from 'react';
import {styles} from './styles';
import {ScreenWrapper} from '../../component/ScreenWrapper';
import HomeHeader from '../../component/HomeHeader';
import {dummyImages} from '../../Assets/Images';
import {ActivityIndicator, FlatList, View} from 'react-native';
import RecommendationCard from '../../component/RecommendationCard';
import {navigate} from '../../Utils/navigation';
import {
  useGetRecommendationProductsQuery,
  useSaveProductQuery,
} from '../../Redux/Services/User';
import colors from '../../Utils/colors';
import {useIsFocused} from '@react-navigation/native';

const SavedProducts = () => {
  const {data, isLoading, isError, refetch} = useSaveProductQuery({});
  const isFocused = useIsFocused();
  useEffect(() => {
    refetch();
  }, [isFocused]);

  console.log('data', data);
  const onPressProduct = (item: any) => {
    const _item = Object.assign({}, item);
    delete _item.name;
    navigate('SavedProductDetail', {item: _item});
  };

  const renderItems = ({item}: any) => {
    console.log('item', item);
    return (
      <RecommendationCard
        item={item}
        onPress={onPressProduct.bind(null, item)}
      />
    );
  };

  const renderSeperator = () => <View style={styles.seperator} />;
  if (isLoading) {
    return (
      <View style={styles.loading_view}>
        <ActivityIndicator size={'large'} color={colors.primary} />
      </View>
    );
  }
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
