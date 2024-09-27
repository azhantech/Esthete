import { StyleSheet } from 'react-native';
import colors from '../../Utils/colors';
import { vh } from '../../Utils/helpers';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: "center"
  },
  outerCircle: {
    width: vh * 2,
    height: vh * 2,
    borderRadius: (vh * 2) / 2,
    borderWidth: 1.5,
    borderColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  innerCircle: {
    width: vh * 1,
    height: vh * 1,
    borderRadius: (vh * 1) / 2,
    backgroundColor: colors.white,
  },
  label: {
    color: colors.white
  }
});
