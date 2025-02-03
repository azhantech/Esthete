import React from 'react';
import {styles} from './styles';
import {ScreenWrapper} from '../../component/ScreenWrapper';
import {dummyImages} from '../../Assets/Images';
import {ActivityIndicator, FlatList, View} from 'react-native';
import CommonCard from '../../component/CommonCard';
import {heightPixel} from '../../Utils/helpers';
import {useGetEducationContentQuery} from '../../Redux/Services/User';
import colors from '../../Utils/colors';
import {navigate} from '../../Utils/navigation';

const Videos = () => {
  const {data, isLoading, isError} = useGetEducationContentQuery({
    type: 'video',
  });

  console.log('datadata videos ===========>', data);

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
      image_height={heightPixel(154)}
      is_video
      onPress={() => navigate('VideoDetail', {id: item?._id})}
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

export default Videos;
