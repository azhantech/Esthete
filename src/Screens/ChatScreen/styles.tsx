import {StyleSheet} from 'react-native';
import {vh, vw} from '../../Utils/helpers';
import colors from '../../Utils/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    color: colors.placeHolderText,
    fontSize: vh * 2.2,
  },
  profileDetails: {
    width: '100%',
    height: vh * 60,
    backgroundColor: 'white',
    borderRadius: vh * 4,
    borderColor: colors.borderColor,
    borderWidth: 0.5,
    padding: vh * 4,
  },
  threeDots: {
    height: vh * 3,
    width: vw * 3,
    resizeMode: 'contain',
  },
  emojibtn: {
    width: '10%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  emojiIcon: {
    height: '60%',
    width: '60%',
    resizeMode: 'contain',
  },
  renderInput: {
    width: '100%',
    backgroundColor: colors.primary,
    height: vh * 10,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputToolbar: {
    width: '100%',
    backgroundColor: 'transparent',
    height: '100%',
    elevation: 0,
    margin: 0,
    padding: 0,
    borderWidth: 0,
    color: 'red',
    justifyContent: 'center',
    borderColor: colors.primary,
    paddingHorizontal: '3%',
  },
  inputContainer: {
    width: '80%',
    height: vh * 6.5,
    borderWidth: 1,
    borderColor: colors.white,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: vh,
  },
  profileContainer: {
    padding: vh * 3,
  },
  mainText: {
    color: colors.subHeading,
    marginBottom: vh * 1.5,
  },
  divider: {
    width: '90%',
    height: vh * 0.1,
    backgroundColor: colors.border,
    alignSelf: 'center',
    marginVertical: vh * 2,
  },
  emergencyText: {
    color: colors.bottomIcon,
    fontSize: vh * 2,
  },
  cardContainer: {
    flexDirection: 'row',
    marginVertical: vh,
    alignItems: 'center',
  },
  iconContainer: {
    width: vw * 10,
    height: vh * 5,
    borderRadius: vh * 1.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nameText: {
    color: colors.subHeading,
    fontSize: vh * 1.5,
  },
  adminText: {
    color: colors.activebottomIcon,
    fontSize: vh,
  },
  numberText: {
    color: colors.bottomIcon,
    fontSize: vh * 1.8,
  },
});
