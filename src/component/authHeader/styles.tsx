import {StyleSheet} from 'react-native';
import {vh, vw} from '../../Utils/helpers';
import colors from '../../Utils/colors';

export const styles = StyleSheet.create({
  authHeader: {
    height: vh * 30,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  imageStyle: {
    height: vh * 15,
    resizeMode: 'contain',
    width: vw * 65,
  },
  title: {
    fontSize: vh * 3,
  },
  subTitle: {
    fontSize: vh * 1.8,
  },
  headerTitle: {
    width: vw * 85,
    justifyContent: 'space-evenly',
    height: '30%',
    alignItems: 'center',
  },
  seprator: {
    height: 3,
    borderRadius: 5,
    width: '30%',
  },
});
