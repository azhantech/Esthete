import React, {useState} from 'react';
import {FlatList, View} from 'react-native';
import {ScreenWrapper} from '../../component/ScreenWrapper';
import {dummyImages} from '../../Assets/Images';
import Button from '../../component/Button';
import CircleImage from '../../component/CircularImage';
import CustomText from '../../component/Text';
import styles from './styles';
import HorizontalVideoCard from '../../component/HorizontalVideoCard';

const EducationalContent = () => {
  const [selectedSkinConcerns, setSelectedSkinConcerns] = useState([]);

  const skinConcerns = [
    {id: 1, text: 'Normal', image: dummyImages.skin.skinAcne},
    {id: 2, text: 'Dry', image: dummyImages.skin.skinDry},
    {id: 3, text: 'Oily', image: dummyImages.skin.skinOily},
    {id: 4, text: 'Combination', image: dummyImages.skin.skinCombination},
    {id: 5, text: 'Acne', image: dummyImages.skin.skinAcne},
    {id: 6, text: 'Normal', image: dummyImages.skin.NormalSkin},
  ];

  const VIDEOS = [
    {
      id: '1',
      image: dummyImages.video_small,
      title: 'Andien',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
    },
    {
      id: '2',
      image: dummyImages.video_small,
      title: 'Andien',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
    },
  ];

  const handleSelect = id => {
    setSelectedSkinConcerns(prev => {
      if (prev.includes(id)) {
        return prev.filter(val => val !== id);
      }
      return [...prev, id];
    });
  };

  const renderVideos = ({item}: any) => <HorizontalVideoCard item={item} />;

  const renderSeperator = () => <View style={styles.seperator} />;

  return (
    <ScreenWrapper mainContainerStyles={styles.container}>
      <CustomText style={styles.sectionTitle}>Recent Articles</CustomText>
      <View style={styles.items_wrapper}>
        {skinConcerns.map((item, index) => (
          <View key={item.id} style={{width: '30%'}}>
            <CircleImage
              image={item.image}
              isSelected={selectedSkinConcerns.includes(item.id)}
              onPress={() => handleSelect(item.id)}
            />
          </View>
        ))}
      </View>

      <Button
        text="View All Articles"
        style={styles.button}
        onPress={() => {}}
      />

      <CustomText style={styles.sectionTitle}>Videos</CustomText>
      <View style={styles.horizontal_list_Container}>
        <FlatList
          data={VIDEOS}
          horizontal
          keyExtractor={item => item.id}
          contentContainerStyle={styles.content_container}
          renderItem={renderVideos}
          ItemSeparatorComponent={renderSeperator}
        />
      </View>
      <Button text="View All Videos" style={styles.button} onPress={() => {}} />
    </ScreenWrapper>
  );
};

export default EducationalContent;
