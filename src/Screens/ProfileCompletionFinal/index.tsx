import React, {useState} from 'react';
import {View} from 'react-native';
import {ScreenWrapper} from '../../component/ScreenWrapper';
import {dummyImages} from '../../Assets/Images';
import Button from '../../component/Button';
import CircleImage from '../../component/CircularImage';
import CustomText from '../../component/Text';
import styles from './styles';
import {
  goBack,
  navigate,
  navigateAndSimpleReset,
  navigationRef,
} from '../../Utils/navigation';

const ProfileCompletionFinal = () => {
  const [selectedSkinConcerns, setSelectedSkinConcerns] = useState([]);
  const [selectedHairTypes, setSelectedHairTypes] = useState([]);

  const skinConcerns = [
    {id: 2, text: 'Hair Loss', image: dummyImages.hair.straight},
    {id: 1, text: 'Split Ends', image: dummyImages.hair.colly},
    {id: 3, text: 'Dandruff', image: dummyImages.hair.curly},
    {id: 4, text: 'Frizz', image: dummyImages.hair.straight},
    {id: 6, text: 'Dullness', image: dummyImages.hair.colly},
    {id: 5, text: 'Hair Loss', image: dummyImages.hair.curly},
  ];

  const hairTypes = [
    {id: 1, text: 'Blonde', image: dummyImages.hair.curly},
    {id: 2, text: 'Black', image: dummyImages.hair.colly},
    {id: 3, text: 'Red', image: dummyImages.hair.straight},
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
        What’s your Hair Concern?
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
          text="Save"
          style={styles.nextButton}
          textStyle={styles.nextButtonText}
          onPress={() => navigateAndSimpleReset('DrawerNavigator')}
        />
      </View>
    </ScreenWrapper>
  );
};

export default ProfileCompletionFinal;
