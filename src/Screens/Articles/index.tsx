import React from 'react';
import {styles} from './styles';
import {ScreenWrapper} from '../../component/ScreenWrapper';
import {dummyImages} from '../../Assets/Images';
import {ActivityIndicator, FlatList, View} from 'react-native';
import CommonCard from '../../component/CommonCard';
import {heightPixel} from '../../Utils/helpers';
import {navigate} from '../../Utils/navigation';
import {useGetEducationContentQuery} from '../../Redux/Services/User';
import colors from '../../Utils/colors';

const Articles = () => {
  const {data, isLoading, isError} = useGetEducationContentQuery({
    type: 'article',
  });

  if (isLoading) {
    return (
      <View style={styles.loading_container}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }

  const renderItems = ({item}: any) => (
    <CommonCard
      item={item}
      onPress={() => navigate('ArticleDetail', {id: item?._id})}
      image_height={heightPixel(123)}
      is_more_details
    />
  );

  const renderSeperator = () => <View style={styles.seperator} />;

  return (
    <ScreenWrapper mainContainerStyles={styles.container}>
      <FlatList
        data={data ?? []}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id}
        renderItem={renderItems}
        ItemSeparatorComponent={renderSeperator}
        contentContainerStyle={styles.content_container}
      />
    </ScreenWrapper>
  );
};

export default Articles;
