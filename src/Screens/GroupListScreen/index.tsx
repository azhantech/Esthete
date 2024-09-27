import React from 'react';
import { View, FlatList, StyleSheet, Image } from 'react-native';

import CustomText from '../../component/Text';
import Button from '../../component/Button';
import GroupCard from '../../component/GroupCard';
import { vh, vw } from '../../Utils/helpers';
import { dummyImages, icons } from '../../Assets/Images';
import { styles } from './styles';
import { ScreenWrapper } from '../../component/ScreenWrapper';
import { navigationRef } from '../../Utils/navigation';

const groupsData = [
  {
    id: '1',
    title: 'My Mental (Healthy Mind)',
    description: '22k Members 10+ Posts A Day',
    image: dummyImages.dummyUser1,
    joined: false,
  },
  {
    id: '2',
    title: 'Gal Pal (Making Friends)',
    description: '22k Members',
    image: dummyImages.dummyUser2,
    joined: true,
  },
  {
    id: '3',
    title: 'Body Bliss (Healthy Body)',
    description: '22k Members 10+ Posts A Day',
    image: dummyImages.dummyUser1,
    joined: false,
  },
  {
    id: '4',
    title: 'Head Over Heels',
    description: '22k Members 10+ Posts A Day',
    image: dummyImages.dummyUser2,
    joined: true,
    rating: icons.rating,
    gropType: 'Dating Tips',
  },
];

const GroupListScreen = () => {
  const renderGroupCard = ({ item }: any) => (
    <GroupCard
      image={item.image}
      title={item.title}
      description={item.description}
      imageContainer={{ width: '25%' }}
      onJoin={() => navigationRef.navigate('ChatScreen', { name: item?.title })}
      rating={item?.rating}
      groupType={item?.gropType}
    />
  );

  const renderHeaderComponent = () => {
    /* Header */
    return (
      <View style={styles.header}>
        <CustomText style={styles.title}>Groups</CustomText>
        <Button
          text="Emergency"
          style={styles.emergencyButton}
          onPress={() =>
            navigationRef.navigate('ChatScreen', { name: 'Emergency' })
          }
        />
      </View>
    );
  };
  return (
    <ScreenWrapper mainContainerStyles={styles.container}>
      {/* Groups List */}
      <FlatList
        data={groupsData}
        ListHeaderComponent={renderHeaderComponent}
        renderItem={renderGroupCard}
        keyExtractor={item => item.id}
        style={{ flexGrow: 1 }}
        contentContainerStyle={styles.groupsList}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </ScreenWrapper>
  );
};

export default GroupListScreen;
