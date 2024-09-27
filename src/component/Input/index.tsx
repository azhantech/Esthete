import {FC, memo, useCallback, useState} from 'react';
import {
  DimensionValue,
  Image,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import {IInput} from '../../Interfaces';
import colors from '../../Utils/colors';
import styles from './style';
import {icons} from '../../Assets/Images';
import CustomText from '../Text';

const Input: FC<IInput> = props => {
  const {label, required, left, right, type, multiline, input_wrapper} = props;

  const [secure, setSecure] = useState<boolean>(type === 'password');

  const toggleSecure = useCallback(() => setSecure(e => !e), []);

  const renderLeft = () => {
    if (left) {
      return (
        <View style={styles.icon_wrapper}>
          <Image source={left} style={styles.icon} />
        </View>
      );
    }

    return null;
  };
  const RightView = right ? View : TouchableOpacity;
  const renderRight = () => {
    if (type === 'password' || right) {
      return (
        <RightView style={styles.icon_wrapper} onPress={toggleSecure}>
          <Image
            source={
              type === 'password' ? (secure ? icons.eye_off : icons.eye) : right
            }
            style={styles.icon}
          />
        </RightView>
      );
    }

    return null;
  };

  let flex: number =
    left && (type === 'password' || right)
      ? 0.8
      : left || type === 'password' || right
      ? 0.9
      : 1;
  let height = multiline ? 250 : label ? 100 : 60;
  let input_height: DimensionValue = multiline ? '80%' : label ? '60%' : '100%';
  let label_height: DimensionValue = multiline ? '20%' : '40%';
  let multiline_props = {};

  if (multiline) {
    multiline_props = {
      multiline: true,
      numberOfLines: 6,
      textAlignVertical: 'top',
    };
  }

  return (
    <View style={[styles.container, {height}]}>
      {label && (
        <View style={[styles.label_wrapper, {height: label_height}]}>
          <CustomText weight="semiBold" style={styles.label}>
            {label}{' '}
            {required && (
              <CustomText weight="semiBold" style={{color: 'red'}}>
                *
              </CustomText>
            )}
          </CustomText>
        </View>
      )}
      <View
        style={[styles.input_wrapper, {height: input_height}, input_wrapper]}>
        {renderLeft()}
        <View style={[styles.textinput_wrapper, {flex}]}>
          <TextInput
            style={styles.textinput}
            placeholderTextColor={colors.light_text}
            cursorColor={colors.primary}
            secureTextEntry={secure}
            {...multiline_props}
            {...props}
          />
        </View>
        {renderRight()}
      </View>
    </View>
  );
};

export default memo(Input);
