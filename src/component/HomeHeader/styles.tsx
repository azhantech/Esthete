import {StyleSheet} from 'react-native';
import colors from '../../Utils/colors';
import {font, vw, width} from '../../Utils/helpers';

export const styles = StyleSheet.create({
  container: {
    width: width,
    alignSelf: 'center',
  },
  we_beauty: {
    color: colors.light_text,
  },
  brown_text: {
    color: colors.primary,
    fontSize: font(12),
  },
});
