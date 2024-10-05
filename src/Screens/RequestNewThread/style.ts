import { StyleSheet } from "react-native";
import { font, heightPixel, vh, vw, widthPixel } from "../../Utils/helpers";
import colors from "../../Utils/colors";

const styles = StyleSheet.create({
    error: {
        color: colors.red,
        marginTop: 5,
        marginBottom: 10,
        width: vw * 85,
    },
    container: {
        paddingHorizontal: vw * 10
    },
    button_view: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: heightPixel(20),
    },
    button_container: {
        width: widthPixel(150),
    },
    button: {
        backgroundColor: colors.auth_button,
        borderColor: colors.primary,
    },
    button_text: {
        color: colors.black,
    },
    title: {
        fontSize: font(18),
        lineHeight: font(35),
        color: colors.primary
    },
    line: {
        borderBottomWidth: 1,
        borderColor: colors.primary,
        width: widthPixel(84)
    },
    title_container: {
        marginTop: heightPixel(30),
        marginBottom: heightPixel(7)
    }
})

export default styles