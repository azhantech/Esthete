import { StyleSheet } from 'react-native';
import colors from '../../Utils/colors';
import { vh, vw, appShadow } from '../../Utils/helpers';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black,
    },
    scrollContainer: {
        flexGrow: 1,
        width: vw * 85,
        paddingTop: vh * 4,
        paddingBottom: vh * 10,
        alignSelf: 'center',
    },
    title: {
        fontSize: vh * 1.9
    },
    happy: {
        fontSize: vh * 1.4,
        color: colors.selectionColor
    },
    profileImageContainer: {
        alignSelf: 'center',
        alignItems: 'center',
        marginTop: vh * 1.5
    },
    profileImage: {
        height: vh * 18,
        width: vh * 18,
        marginBottom: vh
    },
    moodContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.white,
        marginTop: vh * 0.5,
        borderRadius: vh * 0.5,
        height: vh * 4,
        width: vw * 15,
        ...appShadow
    },
    editButton: {
        alignSelf: 'center',
        marginTop: vh * 3
    },
    changePasswordText: {
        fontSize: vh * 1.7,
        textDecorationLine: 'underline',
        color: colors.selectionColor
    },
    changePasswordBtn: {
        alignSelf: 'center',
        marginTop: vh
    }
});

export default styles;
