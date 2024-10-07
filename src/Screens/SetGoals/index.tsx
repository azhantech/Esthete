import React, {useState} from 'react';
import {View} from 'react-native';
import {ScreenWrapper} from '../../component/ScreenWrapper';
import {dummyImages} from '../../Assets/Images';
import Button from '../../component/Button';
import CircleImage from '../../component/CircularImage';
import CustomText from '../../component/Text';
import styles from './styles';
import {navigationRef} from '../../Utils/navigation';

const SetGoals = () => {
  const [selectedItems, setSelectedItems] = useState({
    step1: {skin: [], hair: []},
    step2: {skin: [], hair: []},
    step3: {skin: [], hair: []},
  });

  const [step, setStep] = useState(1);

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
  ];

  const stepArr = {
    1: {
      name: 'What’s your Skin Type?',
      subname: 'What’s Your Skin Tone?',
      arr: skinConcerns,
      arr1: hairTypes,
    },
    2: {
      name: 'What’s your Skin Concern?',
      subname: 'What’s Your Hair Type?',
      arr: skinConcerns,
      arr1: hairTypes,
    },
    3: {
      name: 'What’s your Hair Concern?',
      subname: 'What’s your Hair Colour?',
      arr: skinConcerns,
      arr1: hairTypes,
    },
  };

  const handleSelect = (id, type) => {
    setSelectedItems(prev => {
      const updatedStep = prev[`step${step}`][type].includes(id)
        ? prev[`step${step}`][type].filter(val => val !== id)
        : [...prev[`step${step}`][type], id];

      return {
        ...prev,
        [`step${step}`]: {...prev[`step${step}`], [type]: updatedStep},
      };
    });
  };

  const renderBtn = () => {
    if (step === 1) {
      return (
        <Button
          text="Next"
          style={[styles.prevButton, {width: '100%'}]}
          onPress={() => setStep(e => e + 1)}
        />
      );
    } else if (step === 2) {
      return (
        <>
          <Button
            text="Previous"
            style={styles.prevButton}
            onPress={() => setStep(e => e - 1)}
          />
          <Button
            text="Next"
            style={styles.nextButton}
            textStyle={styles.nextButtonText}
            onPress={() => setStep(e => e + 1)}
          />
        </>
      );
    } else if (step === 3) {
      return (
        <>
          <Button
            text="Previous"
            style={styles.prevButton}
            onPress={() => setStep(e => e - 1)}
          />
          <Button
            text="Update"
            style={styles.nextButton}
            textStyle={styles.nextButtonText}
            onPress={() => {
              setSelectedItems({
                step1: {skin: [], hair: []},
                step2: {skin: [], hair: []},
                step3: {skin: [], hair: []},
              });
              navigationRef.goBack();
            }}
          />
        </>
      );
    }
  };

  return (
    <ScreenWrapper contentContainerStyle={styles.container} scroll>
      {/* Skin Concerns */}
      <CustomText weight="semiBold" style={styles.sectionTitle}>
        {stepArr[step]?.name}
      </CustomText>
      <View style={styles.items_wrapper}>
        {stepArr[step]?.arr.map(item => (
          <View key={item.id} style={{width: '30%', margin: '0%'}}>
            <CircleImage
              image={item.image}
              text={item.text}
              isSelected={selectedItems[`step${step}`].skin.includes(item.id)}
              onPress={() => handleSelect(item.id, 'skin')}
            />
          </View>
        ))}
      </View>

      {/* Hair Types */}
      <CustomText weight="semiBold" style={styles.sectionTitle}>
        {stepArr[step]?.subname}
      </CustomText>
      <View style={styles.items_wrapper}>
        {stepArr[step]?.arr1.map(item => (
          <View key={item.id} style={{width: '30%'}}>
            <CircleImage
              image={item.image}
              text={item.text}
              isSelected={selectedItems[`step${step}`].hair.includes(item.id)}
              onPress={() => handleSelect(item.id, 'hair')}
            />
          </View>
        ))}
      </View>

      {/* Button Section */}
      <View style={styles.buttonContainer}>{renderBtn()}</View>
    </ScreenWrapper>
  );
};

export default SetGoals;
