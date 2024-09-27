import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../../Utils/colors';
import { styles } from './styles';
import { RadioLabelButtonProps } from '../../Interfaces';
import CustomText from '../Text';

const RadioLabelButton: React.FC<RadioLabelButtonProps> = ({ label, selected }) => {
  return (
    <TouchableOpacity activeOpacity={0.7} style={styles.container}>
      <View style={styles.outerCircle}>
        {selected && <View style={styles.innerCircle} />}
      </View>
      <CustomText style={styles.label}>{label}</CustomText>
    </TouchableOpacity>
  );
};

export default RadioLabelButton;
