import {StyleSheet} from 'react-native';
import {font, heightPixel, width, widthPixel} from '../../Utils/helpers';
import colors from '../../Utils/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  content_view: {
    width: width,
  },
  label: {
    fontSize: font(18),
    marginTop: heightPixel(10),
  },
  value: {
    fontSize: font(12),
    marginTop: heightPixel(4),
    lineHeight: font(20),
  },
  button_view: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: heightPixel(20),
  },
  button_container: {
    width: widthPixel(150),
  },
  button: {
    backgroundColor: colors.auth_button,
    borderColor: colors.primary,
  },
  button_text: {
    color: colors.black,
  },
  loading_view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
