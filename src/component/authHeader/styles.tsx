import {StyleSheet} from 'react-native';
import {vh, vw} from '../../Utils/helpers';
import colors from '../../Utils/colors';

export const styles = StyleSheet.create({
  authHeader: {
    height: vh * 30,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  title: {
    fontSize: vh * 2.5,
  },
  headerTitle: {
    width: vw * 85,
    justifyContent: 'space-evenly',
    height: '30%',
  },
  seprator: {
    height: 3,
    borderRadius: 5,
    width: '30%',
    backgroundColor: colors.questionnairColor,
  },
});
