import React, {useState} from 'react';
import {View} from 'react-native';
import {ScreenWrapper} from '../../component/ScreenWrapper';
// Your new component
import {dummyImages} from '../../Assets/Images';
import Button from '../../component/Button';
import CircleImage from '../../component/CircularImage';
import CustomText from '../../component/Text';
import styles from './styles'; // Assuming you will create or reuse existing styles

const ProfileCompletion = () => {
  const [selectedSkinConcerns, setSelectedSkinConcerns] = useState([]);
  const [selectedHairTypes, setSelectedHairTypes] = useState([]);

  const skinConcerns = [
    {id: 1, text: 'Normal', image: dummyImages.skin.skinAcne},
    {id: 2, text: 'Dry', image: dummyImages.skin.skinDry},
    {id: 3, text: 'Oily', image: dummyImages.skin.skinOily},
    {id: 4, text: 'Combination', image: dummyImages.skin.skinCombination},
    {id: 5, text: 'Acne', image: dummyImages.skin.skinAcne},
    {id: 6, text: 'Normal', image: dummyImages.skin.NormalSkin},
  ];

  const hairTypes = [
    {id: 1, text: 'Colly', image: dummyImages.hair.colly},
    {id: 2, text: 'Curly', image: dummyImages.hair.curly},
    {id: 3, text: 'Wavy', image: dummyImages.hair.straight},
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
    <ScreenWrapper>
      {/* Skin Concerns */}
      <CustomText style={styles.sectionTitle}>
        What's Your Skin Concern?
      </CustomText>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}>
        {skinConcerns.map((item, index) => (
          <View key={item.id} style={{width: '30%', margin: '1%'}}>
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
      <CustomText style={styles.sectionTitle}>
        What's Your Hair Type?
      </CustomText>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}>
        {hairTypes.map((item, index) => (
          <View key={item.id} style={{width: '30%', margin: '1%'}}>
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
        <Button
          text="Previous"
          style={styles.prevButton}
          onPress={() => console.log('')}
        />
        <Button
          text="Next"
          style={styles.nextButton}
          onPress={() => console.log('')}
        />
      </View>
    </ScreenWrapper>
  );
};

export default ProfileCompletion;
