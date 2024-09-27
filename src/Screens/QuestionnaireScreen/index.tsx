import React, { useLayoutEffect } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import CustomText from '../../component/Text';
import QuestionItem from '../../component/QuestionItem';
import Button from '../../component/Button';
import colors from '../../Utils/colors';
import { vh, vw, width } from '../../Utils/helpers';
import { ScreenWrapper } from '../../component/ScreenWrapper';
import { navigationRef } from '../../Utils/navigation';
import { useNavigation } from '@react-navigation/native';

const questions = [
  'Lorem Ipsum Dolor Sit Amet, Adipisicing Elit. Aenean Euisimod Bibendum.',
  'Lorem Ipsum Dolor Sit Amet, Adipisicing Elit. Aenean Euisimod Bibendum.',
  'Lorem Ipsum Dolor Sit Amet, Adipisicing Elit. Aenean Euisimod Bibendum.',
  'Lorem Ipsum Dolor Sit Amet, Adipisicing Elit. Aenean Euisimod Bibendum.',
  'Lorem Ipsum Dolor Sit Amet, Adipisicing Elit. Aenean Euisimod Bibendum.',
];

const QuestionnaireScreen = () => {
  const navigation = useNavigation();
  const handleContinue = () => {
    navigationRef.navigate('Signin');
    // Handle continue button click (save responses, navigate, etc.)
  };
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() => {
            navigationRef.navigate('Signin');
          }}
          style={{
            marginRight: vw * 5,
          }}>
          <CustomText
            weight="bold"
            style={{
              fontSize: vh * 1.5,
              color: colors.questionnairColor,
              textTransform: 'capitalize',
            }}>
            Skip
          </CustomText>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <ScreenWrapper scroll contentContainerStyle={styles.container}>
      <CustomText weight="bold" style={styles.title}>
        Answer These Questions To Get Group Suggestions (Optional)
      </CustomText>

      {questions.map((question, index) => (
        <QuestionItem key={index} question={question} index={index + 1} />
      ))}

      <Button
        text="Continue"
        onPress={handleContinue}
        style={styles.continueButton}
      />
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexGrow: 1,
    backgroundColor: colors.white,
    width: vw * 90,
    alignSelf: 'center',
  },

  title: {
    width: width,
    marginVertical: 20,
    fontSize: vh * 1.7,
  },
  continueButton: {
    marginVertical: vh * 3,
    backgroundColor: '#5bc0de',
    borderRadius: 25,
  },
});

export default QuestionnaireScreen;
