import {StyleSheet} from 'react-native';
import {heightPixel, vh, vw, widthPixel} from '../../Utils/helpers';
import colors from '../../Utils/colors';

const styles = StyleSheet.create({
  button: {
    marginVertical: vh * 3,
    width: '90%',
    alignSelf: 'center',
  },
  error: {
    color: colors.red,
    marginTop: 5,
    marginBottom: 10,
    width: vw * 85,
  },
  container: {
    paddingHorizontal: vw * 10,
  },
  status_text: {
    color: colors.primary,
    textDecorationLine: 'underline',
    alignSelf: 'flex-end',
    marginTop: heightPixel(10),
  },
  images_container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: heightPixel(30),
  },
  image: {
    height: heightPixel(134),
    width: widthPixel(144),
  },
  input_container: {
    flexDirection: 'row',
    borderRadius: 8,
    paddingHorizontal: 15,
    elevation: 2,
    backgroundColor: colors.white,
    shadowColor: colors.shadow,
    borderWidth: 1,
    borderColor: colors.borderColor,
    paddingVertical: 10,
    marginTop: 10,
  },
  question_text: {
    marginLeft: 5,
    color: colors.black,
  },
  answer_txt: {
    fontSize: 12,
    lineHeight: 16,
  },
  question_container: {
    marginTop: 20,
  },
});

export default styles;
