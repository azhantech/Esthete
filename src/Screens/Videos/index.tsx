import React from 'react';
import {styles} from './styles';
import {ScreenWrapper} from '../../component/ScreenWrapper';
import {dummyImages} from '../../Assets/Images';
import {FlatList, View} from 'react-native';
import CommonCard from '../../component/CommonCard';
import {heightPixel} from '../../Utils/helpers';

const PRODUCTS = [
  {
    id: '1',
    image: dummyImages.video_1,
    name: 'Andien',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
  {
    id: '2',
    image: dummyImages.video_2,
    name: 'Andien',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
  {
    id: '3',
    image: dummyImages.video_3,
    name: 'Andien',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
];

const Videos = () => {
  const renderItems = ({item}: any) => (
    <CommonCard item={item} image_height={heightPixel(154)} is_video />
  );

  const renderSeperator = () => <View style={styles.seperator} />;

  return (
    <ScreenWrapper mainContainerStyles={styles.container}>
      <FlatList
        data={PRODUCTS}
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
