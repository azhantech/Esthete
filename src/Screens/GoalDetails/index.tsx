import {ScreenWrapper} from '../../component/ScreenWrapper';
import styles from './style';
import Input from '../../component/Input';
import Button from '../../component/Button';
import {navigate} from '../../Utils/navigation';
import CustomText from '../../component/Text';

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
    id: '1',
    question: 'What’s your Skin Concern?',
    answer: 'Dullness Large Pores',
  },
  {
    id: '2',
    question: 'What’s your Hair Type?',
    answer: 'Curly',
  },
  {
    id: '2',
    question: 'What’s your Skin Type?',
    answer: 'Dry',
  },
  {
    id: '1',
    question: 'What’s your Skin Type?',
    answer: 'Dry',
  },
  {
    id: '2',
    question: 'What’s your Skin Type?',
    answer: 'Dry',
  },
];

const GoalDetails = () => {
  return (
    <ScreenWrapper mainContainerStyles={styles.container}>
      <CustomText weight="bold" style={styles.status_text}>
        In Progress
      </CustomText>
      {QUESTIONS.map(item => (
        <Input
          key={item?.id}
          label={item?.question}
          value={item?.answer}
          editable={false}
        />
      ))}

      <Button
        text="Upload Image"
        style={styles.button}
        onPress={() => navigate('')}
      />
    </ScreenWrapper>
  );
};

export default GoalDetails;
