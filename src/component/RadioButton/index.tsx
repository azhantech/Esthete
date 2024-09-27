import React from 'react';
import {View, StyleSheet} from 'react-native';
import colors from '../../Utils/colors';
import {styles} from './styles';
import {RadioButtonProps} from '../../Interfaces';

const RadioButton: React.FC<RadioButtonProps> = ({selected}) => {
  return (
    <View style={styles.outerCircle}>
      {selected && <View style={styles.innerCircle} />}
    </View>
  );
};

export default RadioButton;
