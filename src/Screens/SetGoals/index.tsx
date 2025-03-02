import React, {useState} from 'react';
import {View} from 'react-native';
import {ScreenWrapper} from '../../component/ScreenWrapper';
import {dummyImages} from '../../Assets/Images';
import Button from '../../component/Button';
import CircleImage from '../../component/CircularImage';
import CustomText from '../../component/Text';
import styles from './styles';
import {goBack, navigationRef} from '../../Utils/navigation';
import Input from '../../component/Input';
import {useAddGoalMutation} from '../../Redux/Services/User';
import Toast from 'react-native-toast-message';

const SetGoals = () => {
  const [addGoal, {isLoading}] = useAddGoalMutation();

  const [selections, setSelections] = useState({
    skinType: '', // Single selection
    skinTone: '', // Single selection
    skinConcerns: [], // Multiple selections
    hairType: '', // Single selection
    hairConcerns: [], // Multiple selections
    hairColor: '', // Single selection
  });

  const [step, setStep] = useState(1);
  const [goalName, setGoalName] = useState('');
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
  const skinType = [
    {id: 1, text: 'Normal', image: dummyImages.skin.skinNormal},
    {id: 2, text: 'Dry', image: dummyImages.skin.skinDry},
    {id: 3, text: 'oily', image: dummyImages.skin.skinOily},
    {id: 4, text: 'Combination', image: dummyImages.skin.skinCombination},
    {id: 5, text: 'Acne', image: dummyImages.skin.skinAcne},
  ];

  const hairTypes = [
    {id: 1, text: 'Colly', image: dummyImages.hair.colly},
    {id: 2, text: 'Curly', image: dummyImages.hair.straight},
    {id: 3, text: 'Wavy', image: dummyImages.hair.curly},
    {id: 4, text: 'Straight', image: dummyImages.hair.straight},
  ];
  const hairConcern = [
    {id: 2, text: 'Hair Loss', image: dummyImages.hair.straight},
    {id: 1, text: 'Split Ends', image: dummyImages.hair.colly},
    {id: 3, text: 'Dandruff', image: dummyImages.hair.curly},
    {id: 4, text: 'Frizz', image: dummyImages.hair.straight},
    {id: 6, text: 'Dullness', image: dummyImages.hair.colly},
    {id: 5, text: 'Dryness', image: dummyImages.hair.colly},
  ];
  const hairColor = [
    {id: 1, text: 'Blonde', image: dummyImages.hair.straight},
    {id: 2, text: 'Black', image: dummyImages.hair.colly},
    {id: 3, text: 'Red', image: dummyImages.hair.curly},
  ];
  const skinTone = [
    {id: 1, text: 'Light', image: dummyImages.tone.Light},
    {id: 2, text: 'Medium', image: dummyImages.tone.MediumTone},
    {id: 5, text: 'Medium Dark', image: dummyImages.tone.MediumDark},
    {id: 6, text: 'Dark', image: dummyImages.tone.Dark},
  ];

  const handleSingleSelect = (name: string, category: string) => {
    setSelections(prev => ({
      ...prev,
      [category]: name,
    }));
  };

  const handleMultipleSelect = (name: string, category: string) => {
    setSelections(prev => ({
      ...prev,
      [category]: prev[category].includes(name)
        ? prev[category].filter(item => item !== name)
        : [...prev[category], name],
    }));
  };

  const stepArr = {
    1: {
      name: 'What’s your Skin Type?',
      subname: 'What’s Your Skin Tone?',
      arr: {data: skinType, type: 'skinType', single: true},
      arr1: {data: skinTone, type: 'skinTone', single: true},
    },
    2: {
      name: 'What’s your Skin Concern?',
      subname: 'What’s Your Hair Type?',
      arr: {data: skinConcerns, type: 'skinConcerns', single: false},
      arr1: {data: hairTypes, type: 'hairType', single: true},
    },
    3: {
      name: 'What’s your Hair Concern?',
      subname: 'What’s your Hair Colour?',
      arr: {data: hairConcern, type: 'hairConcerns', single: false},
      arr1: {data: hairColor, type: 'hairColor', single: true},
    },
  };
  const handleUpdateProduct = () => {
    if (goalName == '') {
      Toast.show({
        text1: 'Error',
        text2: 'Please Add your Group Name',
        type: 'error',
      });
    } else {
      console.log('Selection Product ==============>', selections);
    }
    addGoal({name: goalName, ...selections})
      .unwrap()
      .then(res => {
        Toast.show({
          type: 'success',
          text1: res?.data?.message,
          text2: 'Your profile has been updated successfully.',
        });
        setGoalName('');
        setSelections({
          skinType: '',
          skinTone: '',
          skinConcerns: [],
          hairType: '',
          hairConcerns: [],
          hairColor: '',
        });
        goBack();
      })
      .catch(err => {
        console.log('Err ============>', err);
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
            disabled={isLoading}
          />
          <Button
            text="Update"
            style={styles.nextButton}
            textStyle={styles.nextButtonText}
            onPress={handleUpdateProduct}
            isLoading={isLoading}
            disabled={isLoading}
          />
        </>
      );
    }
  };

  return (
    <ScreenWrapper contentContainerStyle={styles.container} scroll>
      {step == 1 && (
        <View style={styles.inputContainer}>
          <Input
            placeholder="Enter goal name"
            required
            value={goalName}
            onChangeText={setGoalName}
          />
        </View>
      )}
      {/* Skin Concerns */}
      <CustomText weight="semiBold" style={styles.sectionTitle}>
        {stepArr[step]?.name}
      </CustomText>
      <View style={styles.items_wrapper}>
        {stepArr[step]?.arr?.data?.map(item => {
          return (
            <View key={item.id} style={{width: '33%'}}>
              <CircleImage
                image={item.image}
                text={item.text}
                isSelected={
                  stepArr[step]?.arr?.single
                    ? selections[`${stepArr[step]?.arr?.type}`] === item.text
                    : selections[`${stepArr[step]?.arr?.type}`].includes(
                        item.text,
                      )
                }
                onPress={() =>
                  stepArr[step]?.arr?.single
                    ? handleSingleSelect(item.text, stepArr[step]?.arr?.type)
                    : handleMultipleSelect(item.text, stepArr[step]?.arr?.type)
                }
              />
            </View>
          );
        })}
      </View>

      {/* Hair Types */}
      <CustomText weight="semiBold" style={styles.sectionTitle}>
        {stepArr[step]?.subname}
      </CustomText>
      <View style={styles.items_wrapper}>
        {stepArr[step]?.arr1?.data?.map(item => {
          return (
            <View key={item.id} style={{width: '33%'}}>
              <CircleImage
                image={item.image}
                text={item.text}
                isSelected={
                  stepArr[step]?.arr1?.single
                    ? selections[`${stepArr[step]?.arr1?.type}`] === item.text
                    : selections[`${stepArr[step]?.arr1?.type}`].includes(
                        item.text,
                      )
                }
                onPress={() =>
                  stepArr[step]?.arr1?.single
                    ? handleSingleSelect(item.text, stepArr[step]?.arr1?.type)
                    : handleMultipleSelect(item.text, stepArr[step]?.arr1?.type)
                }
              />
            </View>
          );
        })}
      </View>

      {/* Button Section */}
      <View style={styles.buttonContainer}>{renderBtn()}</View>
    </ScreenWrapper>
  );
};

export default SetGoals;
