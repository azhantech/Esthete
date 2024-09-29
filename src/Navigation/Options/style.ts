import { StyleSheet } from 'react-native';
import colors from '../../Utils/colors';
import { font, heightPixel, vh, vw } from '../../Utils/helpers';

const styles = StyleSheet.create({
    title: {
        color: colors.dark_text,
        fontSize: font(30),
    },
    icon: {
        width: heightPixel(28),
        height: heightPixel(28),
        justifyContent: 'center',
        alignItems: 'center',
    },
    left_margin: {
        marginLeft: vw * 10,
    },
    left_icon: {
        width: heightPixel(28),
        height: heightPixel(28),
        resizeMode: 'contain',
    },
    right_icon: {
        marginRight: vw * 10,
    },
    header: {
        height: vh * 7,
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
