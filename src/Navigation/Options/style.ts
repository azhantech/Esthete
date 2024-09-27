import { StyleSheet } from 'react-native';
import colors from '../../Utils/colors';
import { appShadow, vh, vw } from '../../Utils/helpers';

const styles = StyleSheet.create({
    title: {
        color: colors.placeHolderText,
        fontSize: vh * 2.2,
    },
    icon: {
        width: vh * 4,
        height: vh * 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    left_margin: {
        marginLeft: vw * 5,
    },
    left_icon: {
        width: vh * 4,
        height: vh * 4,
        resizeMode: 'contain',
    },
    right_icon: {
        marginRight: vw * 5,
    },
    header: {
        height: vh * 10,
        borderBottomWidth: 1,
        backgroundColor: colors.white,
        elevation: 0,
        shadowOpacity: 0,
    },
    tabBarStyle: {
        position: 'absolute',
        backgroundColor: 'white',
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        height: vh * 8,
        shadowColor: 'red',
        shadowOffset: {
            width: 0,
            height: -3,
        },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 5,
        borderTopWidth: 0,
    },
});

export default styles;
