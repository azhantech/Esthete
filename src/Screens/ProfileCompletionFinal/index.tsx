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
import Toast from 'react-native-toast-message';
import {useUpdatePreferencesMutation} from '../../Redux/Services/User';
import {selectUser} from '../../Redux/Slices/user';
import {useSelector} from 'react-redux';

const ProfileCompletionFinal = props => {
  const [selectedHairConcerns, setSelectedHairConcerns] = useState([]);
  const [selectedHairColor, setSelectedHairColor] = useState(null);
  const [updatePreferences, {isLoading}] = useUpdatePreferencesMutation();
  const user = useSelector(selectUser);


  const skinConcerns = [
    {id: 2, text: 'Hair Loss', image: dummyImages.hair.straight},
    {id: 1, text: 'Split Ends', image: dummyImages.hair.colly},
    {id: 3, text: 'Dandruff', image: dummyImages.hair.curly},
    {id: 4, text: 'Frizz', image: dummyImages.hair.straight},
    {id: 6, text: 'Dullness', image: dummyImages.hair.colly},
    {id: 5, text: 'Dryness', image: dummyImages.hair.colly},
  ];

  const hairTypes = [
    {id: 1, text: 'Blonde', image: dummyImages.hair.curly},
    {id: 2, text: 'Black', image: dummyImages.hair.colly},
    {id: 3, text: 'Red', image: dummyImages.hair.straight},
  ];
  const validateSelections = () => {
    if (selectedHairConcerns.length === 0) {
      Toast.show({
        type: 'error',
        text1: 'Please select at least one hair concern',
      });
      return false;
    }
    if (selectedHairColor == null) {
      Toast.show({
        type: 'error',
        text1: 'Please select your hair color',
      });
      return false;
    }
    return true;
  };

  const handleSave = async () => {
    if (!validateSelections()) return;

    const payload = {
      userId: user?._id,
      skinConcerns: props?.route?.params?.selectedSkinConcerns,
      hairColor: selectedHairColor,
      hairType: props?.route?.params?.selectedHairTypes,
      hairConcerns: selectedHairConcerns, // Assuming single selection for hair color
    };

    updatePreferences(payload)
      .unwrap()
      .then(res => {
        Toast.show({
          type: 'success',
          text1: 'Preferences updated successfully',
        });
      })
      .catch(error => {
        Toast.show({
          type: 'error',
          text1: error?.message || 'Something went wrong',
        });
      });
  };

  const handleSelect = (id, type) => {
    if (type === 'skin') {
      setSelectedHairConcerns(prev => {
        if (prev.includes(id)) {
          return prev.filter(val => val !== id);
        }
        return [...prev, id];
      });
    } else if (type === 'hair') {
      setSelectedHairColor(id);
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
              isSelected={selectedHairConcerns.includes(item.text)}
              onPress={() => handleSelect(item.text, 'skin')}
            />
          </View>
        ))}
      </View>

      {/* Hair Types */}
      <CustomText weight="semiBold" style={styles.sectionTitle}>
        What's Your Hair Color?
      </CustomText>
      <View style={styles.items_wrapper}>
        {hairTypes.map((item, index) => {
          console.log('item.text ===>', selectedHairColor === item.text);
          return (
            <View key={item.id} style={{width: '30%'}}>
              <CircleImage
                image={item.image}
                text={item.text}
                isSelected={selectedHairColor === item.text}
                onPress={() => handleSelect(item.text, 'hair')}
              />
            </View>
          );
        })}
      </View>

      {/* Button Section */}
      <View style={styles.buttonContainer}>
        <Button
          text="Previous"
          style={styles.prevButton}
          onPress={goBack}
          disabled={isLoading}
        />
        <Button
          text="Save"
          style={styles.nextButton}
          textStyle={styles.nextButtonText}
          onPress={() => handleSave()}
          isLoading={isLoading}
          disabled={isLoading}
        />
      </View>
    </ScreenWrapper>
  );
};

export default ProfileCompletionFinal;
