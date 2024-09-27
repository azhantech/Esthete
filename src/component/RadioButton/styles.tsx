import {StyleSheet} from 'react-native';
import colors from '../../Utils/colors';
import {vh} from '../../Utils/helpers';

export const styles = StyleSheet.create({
  outerCircle: {
    width: vh * 2.5,
    height: vh * 2.5,
    borderRadius: (vh * 2.5) / 2,
    borderWidth: 1.5,
    borderColor: colors.questionnairColor,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  innerCircle: {
    width: vh * 1.5,
    height: vh * 1.5,
    borderRadius: (vh * 1.5) / 2,
    backgroundColor: colors.questionnairColor,
  },
});
