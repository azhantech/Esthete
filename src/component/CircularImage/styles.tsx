import {StyleSheet} from 'react-native';
import {vh, vw} from '../../Utils/helpers';
import colors from '../../Utils/colors';

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
  },
  imageContainer: {
    width: vh * 15,
    height: vh * 15,
    borderRadius: (vh * 15) / 2,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  selectedContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedImage: {width: '100%', height: '100%'},
  image: {width: '100%', height: '100%'},
});
export default styles;
