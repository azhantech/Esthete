// import { StyleSheet } from 'react-native';
// import colors from '../../Utils/colors';
// import fonts from '../../Assets/Fonts';

// const PADDING_HORIZONTAL = vw * 3;

// const styles = StyleSheet.create({
//   container: {
//     height: pixelV(67),
//     marginTop: pixelV(25),
//     zIndex: 9999,
//   },
//   label_wrapper: {
//     paddingBottom: pixelV(4),
//     justifyContent: 'center',
//   },
//   label: {
//     color: colors.dark_black,
//     fontSize: font(12),
//   },
//   light_label: {
//     color: colors.white,
//   },
//   primary_label: {
//     color: colors.primary,
//   },
//   input_wrapper: {
//     flexDirection: 'row',
//     borderRadius: pixelV(6),
//     borderWidth: 1.5,
//     borderColor: colors.text_input_border_gray,
//     paddingHorizontal: PADDING_HORIZONTAL,
//     backgroundColor: colors.transparent,
//     height: pixelV(48),
//   },
//   light_input_wrapper: {
//     borderColor: colors.light_white,
//   },
//   caret_style: {
//     tintColor: colors.black,
//   },
//   light_caret_style: {
//     tintColor: colors.white,
//   },
//   text: {
//     color: colors.black,
//     fontFamily: fonts.ECA.regular
//   },
//   drop_container: {
//     backgroundColor: colors.white,
//     borderWidth: 1.5,
//     borderColor: colors.text_input_border_gray,
//     borderRadius: 4,
//   },
//   required: {
//     color: colors.black,
//   },
//   placeholder: {
//     fontFamily: fonts.ECA.light,
//   },
//   light_placeholder: {
//     color: colors.gray,
//   },
//   error: {
//     color: colors.rejected,
//     marginTop: pixelV(5),
//     fontSize: font(14)
//   },
//   light_text: {
//     color: colors.white,
//   },
//   switch: {
//     marginRight: pixelH(10)
//   }
// });

// export default styles;

import { StyleSheet } from 'react-native';
import fonts from '../../Assets/Fonts';
import colors from '../../Utils/colors';
import { vh } from '../../Utils/helpers';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: vh * 1.5,
  },
  label_wrapper: {
    // height: '40%',
    paddingHorizontal: 15,
    justifyContent: 'center',
  },
  label: {
    color: colors.black,
    fontSize: 14,
  },
  input_wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 5,
    elevation: 2,
    backgroundColor: colors.white,
    shadowColor: colors.shadow,
    borderWidth: 1,
    borderColor: colors.borderColor,
  },
  textinput_wrapper: {
    justifyContent: 'center',
  },
  textinput: {
    flex: 1,
    color: colors.black,
    fontFamily: fonts.OpenSans.regular,
    fontSize: 14,
    textAlignVertical: 'center'
  },
  icon_wrapper: {
    flex: 0.1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    height: '60%',
    width: '60%',
    resizeMode: 'contain',
  },
});

export default styles;
