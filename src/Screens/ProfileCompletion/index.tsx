import React, {useState} from 'react';
import {View} from 'react-native';
import {ScreenWrapper} from '../../component/ScreenWrapper';
import {dummyImages} from '../../Assets/Images';
import Button from '../../component/Button';
import CircleImage from '../../component/CircularImage';
import CustomText from '../../component/Text';
import styles from './styles';
import {goBack, navigate} from '../../Utils/navigation';

const ProfileCompletion = () => {
  const [selectedSkinConcerns, setSelectedSkinConcerns] = useState([]);
  const [selectedHairTypes, setSelectedHairTypes] = useState([]);

  const skinConcerns = [
    {id: 1, text: 'Acne Scars', image: dummyImages.product_1},
    {id: 2, text: 'Black/WhiteHeads', image: dummyImages.skin.skinOily},
    {id: 3, text: 'Dark Undereyes', image: dummyImages.skin.skinDry},
    {id: 4, text: 'Dullness', image: dummyImages.skin.skinCombination},
    {id: 5, text: 'Hyper-Pigmentation', image: dummyImages.skin.skinAcne},
    {id: 6, text: 'Roughness', image: dummyImages.tone.Light},
    {id: 7, text: 'Large Pores', image: dummyImages.tone.Dark},
    {id: 8, text: 'Sensitivity', image: dummyImages.tone.MediumDark},
    {id: 9, text: 'Wrinkles', image: dummyImages.tone.Medium},
  ];

  const hairTypes = [
    {id: 1, text: 'Colly', image: dummyImages.hair.colly},
    {id: 2, text: 'Curly', image: dummyImages.hair.straight},
    {id: 3, text: 'Wavy', image: dummyImages.hair.curly},
    {id: 4, text: 'Straight', image: dummyImages.hair.straight},
    {id: 5, text: 'Colly', image: dummyImages.hair.curly},
    {id: 6, text: 'Curly', image: dummyImages.hair.colly},
  ];

  const handleSelect = (id, type) => {
    if (type === 'skin') {
      setSelectedSkinConcerns(prev => {
        if (prev.includes(id)) {
          return prev.filter(val => val !== id);
        }
        return [...prev, id];
      });
    } else if (type === 'hair') {
      setSelectedHairTypes(prev => {
        if (prev.includes(id)) {
          return prev.filter(val => val !== id);
        }
        return [...prev, id];
      });
    }
  };

  return (
    <ScreenWrapper mainContainerStyles={styles.container}>
      {/* Skin Concerns */}
      <CustomText weight="semiBold" style={styles.sectionTitle}>
        What's Your Skin Concern?
      </CustomText>
      <View style={styles.items_wrapper}>
        {skinConcerns.map((item, index) => (
          <View key={item.id} style={{width: '30%', margin: '0%'}}>
            <CircleImage
              image={item.image}
              text={item.text}
              isSelected={selectedSkinConcerns.includes(item.id)}
              onPress={() => handleSelect(item.id, 'skin')}
            />
          </View>
        ))}
      </View>

      {/* Hair Types */}
      <CustomText weight="semiBold" style={styles.sectionTitle}>
        What's Your Hair Type?
      </CustomText>
      <View style={styles.items_wrapper}>
        {hairTypes.map((item, index) => (
          <View key={item.id} style={{width: '30%'}}>
            <CircleImage
              image={item.image}
              text={item.text}
              isSelected={selectedHairTypes.includes(item?.id)}
              onPress={() => handleSelect(item.id, 'hair')}
            />
          </View>
        ))}
      </View>

      {/* Button Section */}
      <View style={styles.buttonContainer}>
        <Button text="Previous" style={styles.prevButton} onPress={goBack} />
        <Button
          text="Next"
          style={styles.nextButton}
          textStyle={styles.nextButtonText}
          onPress={() => navigate('ProfileCompletionFinal')}
        />
      </View>
    </ScreenWrapper>
  );
};

export default ProfileCompletion;
