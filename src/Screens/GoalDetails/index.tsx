import {ScreenWrapper} from '../../component/ScreenWrapper';
import styles from './style';
import Input from '../../component/Input';
import Button from '../../component/Button';
import CustomText from '../../component/Text';
import {Image, View} from 'react-native';
import {dummyImages} from '../../Assets/Images';
import {useState} from 'react';

const QUESTIONS = [
  {
    id: '1',
    question: 'What’s your Skin Type?',
    answer: 'Dry',
  },
  {
    id: '2',
    question: 'What’s your Skin Tone?',
    answer: 'Dry',
  },
  {
    id: '3',
    question: 'What’s your Skin Concern?',
    answer: 'Dullness Large Pores',
  },
  {
    id: '4',
    question: 'What’s your Hair Type?',
    answer: 'Curly',
  },
  {
    id: '5',
    question: 'What’s your Skin Type?',
    answer: 'Dry',
  },
];

const GoalDetails = () => {
  const [showImages, setShowImages] = useState(false);
  const [finishGoal, setFinishGoal] = useState(false);

  return (
    <ScreenWrapper mainContainerStyles={styles.container}>
      <CustomText weight="bold" style={styles.status_text}>
        {finishGoal ? 'Completed' : 'In Progress'}
      </CustomText>
      {QUESTIONS.map(item => (
        <Input
          key={item?.id}
          label={item?.question}
          value={item?.answer}
          editable={false}
        />
      ))}

      {showImages && (
        <View style={styles.images_container}>
          <Image source={dummyImages.goal_1} style={styles.image} />
          <Image source={dummyImages.goal_2} style={styles.image} />
        </View>
      )}

      {!showImages && (
        <Button
          text="Upload Image"
          style={styles.button}
          onPress={() => setShowImages(true)}
        />
      )}
      {!finishGoal && showImages && (
        <Button
          text="Finish Goal"
          style={styles.button}
          onPress={() => setFinishGoal(true)}
        />
      )}
    </ScreenWrapper>
  );
};

export default GoalDetails;
