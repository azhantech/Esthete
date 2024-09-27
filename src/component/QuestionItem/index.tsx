import React, {FC, useState} from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import CustomText from '../Text';
import RadioButton from '../RadioButton';
import {vh, vw} from '../../Utils/helpers';

interface QuestionItemProps {
  question: string;
  index: number;
}

const QuestionItem: FC<QuestionItemProps> = ({question, index}) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  return (
    <View style={styles.questionContainer}>
      <CustomText
        weight="regular"
        style={styles.questionText}>{`Q${index}) ${question}`}</CustomText>
      <View style={styles.answerRow}>
        <CustomText weight="bold" style={styles.answerLabel}>
          Answer:
        </CustomText>
        <TouchableOpacity
          style={styles.radioButton}
          onPress={() => setSelectedAnswer('true')}>
          <RadioButton selected={selectedAnswer === 'true'} />
          <CustomText weight="regular">True</CustomText>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.radioButton}
          onPress={() => setSelectedAnswer('false')}>
          <RadioButton selected={selectedAnswer === 'false'} />
          <CustomText weight="regular">False</CustomText>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  questionContainer: {
    padding: vh * 2,
    marginBottom: vh * 2.5,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 10,
    width: '100%',
  },
  questionText: {
    fontSize: vh * 1.6,
  },
  answerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: vh * 2,
  },
  answerLabel: {
    marginRight: vw * 2,
    fontWeight: '600',
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: vw * 2.2,
  },
});

export default QuestionItem;
