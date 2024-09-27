import {StyleSheet} from 'react-native';
import {vh, vw} from '../../Utils/helpers';
import colors from '../../Utils/colors';

export const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: vw * 85,
    justifyContent: 'space-between',
    marginTop: vh * 1.5,
  },
  line: {
    width: '40%',
    height: 1,
    backgroundColor: colors.seprator,
  },
  txtStyle: {
    fontSize: vh * 2,
    lineHeight: vh * 2.5,
    textAlign: 'center',
    textTransform: 'capitalize',
  },
});
