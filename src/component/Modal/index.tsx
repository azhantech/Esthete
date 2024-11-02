import {FC, memo} from 'react';
import {
  Image,
  Keyboard,
  Modal as RModal,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import {icons} from '../../Assets/Images';
import {IModal} from '../../Interfaces';
import Text from '../Text';
import styles from './style';
import {useKeyboardVisible} from '../../Hooks/useKeyboardVisible';

import Input from '../Input';
import Button from '../Button';
import {vh} from '../../Utils/helpers';
import colors from '../../Utils/colors';

const Modal: FC<IModal> = props => {
  const {
    open,
    setOpen,
    btnIcon,
    title = '',
    text = '',
    text1 = '',
    buttons = [{text: 'Ok'}],
    icon,
    value,
    setValue,
    multiline,
    placeholder = 'Enter ...',
    onRequestClose,
    buttonStyle,
    row,
    buttonsWrapperStyle,
    headingStyle,
    close,
    input_wrapper,
  } = props;

  const isVisible = useKeyboardVisible();

  return (
    <RModal
      animationType="fade"
      transparent={true}
      visible={open}
      statusBarTranslucent
      onRequestClose={onRequestClose}>
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}>
        <View style={styles.centeredView}>
          <View
            style={[
              styles.modalView,
              {marginBottom: isVisible ? (multiline ? vh * 35 : vh * 18) : 0},
            ]}>
            {!close && (
              <TouchableOpacity
                activeOpacity={0.7}
                style={styles.cancel_button}
                onPress={() => {
                  setOpen(!open);
                }}>
                <Image source={icons.cross} style={styles.cross_icon} />
              </TouchableOpacity>
            )}

            {icon && (
              <View style={styles.imageWrapper}>
                <Image source={icon} style={styles.icon} />
              </View>
            )}

            <View style={styles.itemsWrapper}>
              <Text style={[styles.heading, headingStyle]} weight="semiBold">
                {title}
              </Text>
              {text && (
                <Text style={styles.modalText} weight="regular">
                  {text}
                </Text>
              )}
              {text1 && (
                <Text style={styles.modalText} weight="regular">
                  {text1}
                </Text>
              )}

              {setValue && (
                <Input
                  placeholder={placeholder}
                  mode="muted"
                  value={value}
                  onChangeText={setValue}
                  multiline={multiline}
                  input_wrapper={input_wrapper}
                />
              )}
            </View>
            <View
              style={[
                styles.buttonsWrapper,
                buttons.length <= 1 && styles.justifyCenter,
                row && {flexDirection: 'row'},
                buttonsWrapperStyle,
              ]}>
              {buttons?.map((item, index) => (
                <Button
                  key={index}
                  type={index % 2 != 0 ? 'light' : 'basic'}
                  style={[
                    styles.button,
                    buttonStyle,
                    {
                      backgroundColor:
                        index % 2 != 0 ? colors.white : colors.primary,
                    },
                  ]}
                  textStyle={{
                    color: index % 2 != 0 ? colors.primary : colors.white,
                  }}
                  text={item?.text}
                  onPress={() => {
                    setOpen(!open);
                    if (item?.onPress) {
                      item?.onPress();
                    }
                  }}
                  btnIcon={btnIcon}
                />
              ))}
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </RModal>
  );
};

export default memo(Modal);
