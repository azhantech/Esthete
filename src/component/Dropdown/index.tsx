// import { FC, memo, useEffect, useState } from 'react';
// import { LayoutAnimation, View } from 'react-native';
// import DropDownPicker from 'react-native-dropdown-picker';
// import styles from './style';
// import { IDropdown } from '../../Interfaces';
// import Text from '../Text';
// import colors from '../../Utils/colors';

// const Dropdown: FC<IDropdown> = props => {
//   const {
//     label,
//     required,
//     placeholder,
//     items,
//     style,
//     type,
//     error,
//     value,
//     setValue,
//     zIndex,
//     zIndexReverse,
//     isSwitchChecked = false,
//     onPressSwitch = () => { }
//   } = props;

//   const [val, setVal] = useState<string | null>(null);
//   const [open, setOpen] = useState(false);
//   const [isChecked, setIsChecked] = useState(isSwitchChecked);

//   useEffect(() => {
//     if (value) {
//       setVal(value);
//     }
//   }, [value]);

//   const label_style = type === 'light' ? styles.light_label : type === 'primary' ? styles.primary_label : {};
//   const input_wrapper_style =
//     type === 'light' ? styles.light_input_wrapper : {};
//   const caret_style = type === 'light' ? styles.light_caret_style : {};
//   const placeholder_style = type === 'light' ? styles.light_placeholder : {};
//   const text_style = type === 'light' ? styles.light_text : {};

//   useEffect(() => {
//     if (error) {
//       LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
//     }
//   }, [error]);

//   return (
//     <View style={[styles.container, style]}>
//       {label &&
//         <Row justify='space-between'>
//           <View style={styles.label_wrapper}>
//             <Text weight="semibold" style={[styles.label, label_style]}>
//               {label}{' '}
//               {required && <Text style={[styles.required, label_style]}>*</Text>}
//             </Text>
//           </View>
//           {isSwitchChecked && <Switch type='small' checked={isChecked} onPress={() => setIsChecked(!isChecked)} style={styles.switch} />}
//         </Row>
//       }
//       <DropDownPicker
//         placeholder={placeholder}
//         open={open}
//         value={val}
//         items={items}
//         setOpen={setOpen}
//         setValue={setVal}
//         onSelectItem={setValue}
//         style={[styles.input_wrapper, input_wrapper_style]}
//         textStyle={[styles.text, text_style]}
//         arrowIconStyle={[styles.caret_style, caret_style]}
//         dropDownContainerStyle={styles.drop_container}
//         placeholderStyle={[styles.placeholder, placeholder_style]}
//         modalTitleStyle={styles.placeholder}
//         listItemLabelStyle={{ color: colors.dark_black }}
//         zIndex={zIndex}
//         zIndexInverse={zIndexReverse}
//         dropDownDirection="BOTTOM"
//         modalTitle={placeholder}
//         // modalTitle="Select an item"
//         modalAnimationType="slide"
//         listMode="MODAL"
//         multiple={false}
//       />
//       {error && (
//         <View>
//           <Text style={styles.error}>{error}</Text>
//         </View>
//       )}
//     </View>
//   );
// };

// export default memo(Dropdown);

import {FC, memo, useCallback, useState} from 'react';
import {DimensionValue, Image, TouchableOpacity, View} from 'react-native';

import {IInput} from '../../Interfaces';
import styles from './style';
import {icons} from '../../Assets/Images';
import CustomText from '../Text';
import {heightPixel} from '../../Utils/helpers';

const Dropdown: FC<IInput> = props => {
  const {
    label,
    required,
    placeholder,
    left,
    right,
    type,
    multiline,
    value,
    container_style,
  } = props;

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
  const renderRight = () => {
    return (
      <View style={styles.icon_wrapper}>
        {/* <Image
          source={
            right ? right : icons.dropdown
          }
          style={styles.icon}
        /> */}
      </View>
    );
  };

  let flex: number =
    left && (type === 'password' || right)
      ? 0.8
      : left || type === 'password' || right
      ? 0.9
      : 1;
  let height = multiline ? 250 : label ? heightPixel(71) : heightPixel(46);
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
    <View style={[styles.container, {height}, container_style]}>
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
      <TouchableOpacity
        {...props}
        activeOpacity={0.7}
        style={[styles.input_wrapper, {height: input_height}]}>
        {renderLeft()}
        <View style={[styles.textinput_wrapper, {flex}]}>
          <CustomText style={styles.textinput}>
            {value ?? placeholder}
          </CustomText>
        </View>
        {renderRight()}
      </TouchableOpacity>
    </View>
  );
};

export default memo(Dropdown);
