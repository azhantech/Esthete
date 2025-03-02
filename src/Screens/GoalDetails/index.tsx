import {ScreenWrapper} from '../../component/ScreenWrapper';
import styles from './style';
import Input from '../../component/Input';
import Button from '../../component/Button';
import CustomText from '../../component/Text';
import {Image, View} from 'react-native';
import {dummyImages} from '../../Assets/Images';
import {useState} from 'react';
import {useGetGoalByIdQuery} from '../../Redux/Services/User';
import {
  hairColor,
  hairConcern,
  hairTypes,
  skinConcerns,
  skinTone,
  skinType,
} from '../../Utils/helpers';
import colors from '../../Utils/colors';

const GoalDetails = ({route}: any) => {
  const id = route?.params?.id;
  const [showImages, setShowImages] = useState(false);
  const [finishGoal, setFinishGoal] = useState(false);
  const {data, isLoading, isError, refetch} = useGetGoalByIdQuery({
    id: id,
  });

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

  const goalsArr = [
    {id: 1, question: 'What’s your Skin Type?', key: 'skinType', answer: 'Dry'},
    {
      id: 2,
      question: 'What’s your Skin Tone?',
      key: 'skinTone',
      answer: 'Medium',
    },
    {
      id: 3,
      question: 'What’s your Skin Concern?',
      key: 'skinConcerns',
      answer: 'Acne Scars, Hyper-Pigmentation, Sensitivity',
    },
    {
      id: 4,
      question: 'What’s your Hair Type?',
      key: 'hairType',
      answer: 'Straight',
    },
    {
      id: 5,
      question: 'What’s your Hair Colour?',
      key: 'hairColor',
      answer: 'Black',
    },
    {
      id: 6,
      question: 'What’s your Hair Concern?',
      key: 'hairConcerns',
      answer: 'Dullness, Frizz, Hair Loss',
    },
  ];

  const updatedGoalsArr = goalsArr.map(goal => ({
    ...goal,
    answer: Array.isArray(data?.data[goal.key])
      ? data?.data[goal.key].join(', ')
      : data?.data[goal.key] || 'Not Provided',
  }));

  return (
    <ScreenWrapper
      mainContainerStyles={styles.container}
      scroll
      showsVerticalScrollIndicator={false}>
      <CustomText weight="bold" style={styles.status_text}>
        {data?.data?.status}
      </CustomText>
      {updatedGoalsArr?.map(item => {
        return (
          <>
            {item?.answer?.length ? (
              <View style={styles.question_container}>
                <CustomText style={styles.question_text} weight="semiBold">
                  {item?.question}
                </CustomText>
                <View style={styles.input_container}>
                  <CustomText style={styles.answer_txt}>
                    {item?.answer}
                  </CustomText>
                </View>
              </View>
            ) : null}
          </>
        );
      })}

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
