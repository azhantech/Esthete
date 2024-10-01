import {StyleSheet} from 'react-native';
import {vh, vw} from '../../Utils/helpers';
import colors from '../../Utils/colors';

export const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    padding: vw * 2,
    borderRadius: 10,
    marginBottom: vh * 2,
    borderWidth: 1,
    borderColor: colors.gray,
    elevation: 5,
    height: vh * 17,
  },
  imageContainer: {
    width: '30%',
    borderRadius: 5,
    overflow: 'hidden',
    height: '100%',
  },
  ratingImage: {
    height: vh * 5,
    width: vw * 5,
    position: 'absolute',
    right: 0,
    resizeMode: 'contain',
    top: -8,
    left: '23%',
    zIndex: 999,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 5,
    resizeMode: 'stretch',
  },
  infoContainer: {
    flex: 1,
    marginLeft: vw * 3,
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    width: '100%',
  },
  title: {
    fontSize: vh * 1.3,
    // width:'70%'
  },
  highlightedTitle: {
    fontSize: vh * 1.3,
    color: colors.questionnairColor,
  },
  description: {
    fontSize: vh * 1.3,
    color: colors.black,
    marginBottom: vh * 1,
  },
  joinButton: {
    width: vw * 23,
    height: vh * 4.5,
  },
  btnText: {
    fontSize: vh * 1.5,
  },
});
