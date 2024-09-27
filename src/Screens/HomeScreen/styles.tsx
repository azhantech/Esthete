import {StyleSheet} from 'react-native';
import {vh, vw, width} from '../../Utils/helpers';
import colors from '../../Utils/colors';

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
  },
  greetingSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: vh * 2,
    width: width,
  },
  line: {
    height: 1,
    backgroundColor: colors.questionnairColor,
    marginVertical: vh * 1,
    width: '100%',
  },
  greeting: {
    fontSize: vh * 2.6,
    textTransform: 'capitalize',
  },
  emergencyButton: {
    backgroundColor: 'red',
    borderRadius: 10,
    width: '40%',
    height: vh * 5.5,
  },
  warningSection: {
    backgroundColor: colors.warningColor,
    width: width,
    marginVertical: vh * 2,
    borderRadius: 10,
    alignItems: 'center',
    padding: vw * 3,
    justifyContent: 'space-between',
    height: vh * 20,
  },
  warningIcon: {
    width: vw * 10,
    height: vh * 5,
    resizeMode: 'contain',
  },
  warningText: {
    fontSize: vh * 1.7,
    color: colors.gray,
    textAlign: 'center',
  },
  groupsSection: {
    marginTop: vh * 2,
    width: width,
  },
  groupsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: vh * 1,
  },
  viewAll: {
    fontSize: 14,
    color: colors.primary,
    textAlign: 'right',
    marginTop: vh * 2,
    textDecorationLine: 'underline',
  },
});
