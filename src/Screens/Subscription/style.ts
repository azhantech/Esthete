import { StyleSheet } from "react-native";
import { font, heightPixel, vh, vw, widthPixel } from "../../Utils/helpers";
import colors from "../../Utils/colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    package_wrapper: {
        width: vw * 100,
        height: heightPixel(480),
        alignItems: 'center',
    },
    form_wrapper: {
        width: vw * 80,
        alignSelf: 'center'
    },
    input_spacing: {
        marginTop: vh * 0.7
    },
    button: {
        marginTop: vh * 1.5
    },
    error: {
        color: colors.red,
        marginTop: 5,
    },
    title: {
        fontSize: font(22),
        lineHeight: font(35),
        color: colors.white,
        marginVertical: heightPixel(15)
    },
    package_name: {
        fontSize: font(18),
        color: colors.dark_text
    },
    feature_text: {
        color: colors.dark_text,
        marginLeft: widthPixel(23),
        marginTop: heightPixel(3)
    },
    dot: {
        height: heightPixel(13),
        width: heightPixel(13),
        borderRadius: heightPixel(13) / 2,
        backgroundColor: colors.primary,
        marginHorizontal: widthPixel(5)
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    package_container: {
        backgroundColor: colors.white,
        borderWidth: heightPixel(3),
        borderRadius: heightPixel(15),
        borderColor: colors.auth_button,
        width: vw * 80,
        paddingVertical: vh
    },
    seperator: {
        height: vh
    },
    package_list_container: {
        height: heightPixel(300)
    },
    price_text: {
        position: 'absolute',
        bottom: heightPixel(5),
        right: widthPixel(5),
        color: colors.primary
    }
})

export default styles