import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions,
  StyleProp,
  ViewStyle,
  Image,
} from 'react-native';
import styles from './styles';
import colors from '../../Utils/colors';

const windowWidth = Dimensions.get('window').width;

interface Option {
  text: string;
  onPress: () => void;
}

interface ReportBlockModalProps {
  isVisible: boolean;
  options?: Option[];
  onClose: () => void;
  style: StyleProp<ViewStyle>;
  id?: number;
  myPost: boolean;
  data: {};
}

const ReportBlockModal: React.FC<ReportBlockModalProps> = ({
  isVisible,
  options,
  onClose,
  style,
  id,
  myPost,
  data,
}) => {
  if (isVisible) {
    return (
      <View style={[styles.modalBackground, style]} activeOpacity={1}>
        <View style={styles.modalContainer}>
          {options?.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.modalOption,
                index % 2 == 0 && {
                  borderBottomWidth: 1,
                  borderColor: colors.primary,
                },
              ]}
              onPress={() => {
                if (myPost) {
                  option?.onPress(data);
                } else {
                  option.onPress(id);
                }
              }}>
              <Image source={option?.icon} style={styles.image} />

              <Text style={{color: colors.black}}>{option.text}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    );
  }

  return null;
};

export default ReportBlockModal;
