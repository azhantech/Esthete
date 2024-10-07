import { StyleSheet } from "react-native";
import { appShadow, font, heightPixel, width, widthPixel } from "../../Utils/helpers";
import colors from "../../Utils/colors";

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    seperator: {
        height: heightPixel(10)
    },
    status_label: {
        fontSize: font(12)
    },
    status_text: {
        fontSize: font(12),
        color: colors.primary
    },
    item: {
        width: width,
        backgroundColor: colors.white,
        borderRadius: heightPixel(7),
        justifyContent: 'space-between',
        paddingHorizontal: widthPixel(20),
        paddingTop: heightPixel(15),
        paddingBottom: heightPixel(10),
        ...appShadow
    },
    list_content: {
        paddingHorizontal: widthPixel(10),
        paddingVertical: heightPixel(20)
    },
    row: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    title: {
        fontSize: font(18),
        color: colors.primary,
        textDecorationLine: 'underline'
    },
    cancel_button: {
        width: widthPixel(79),
        height: heightPixel(35)
    },
    renew_button: {
        width: width,
        marginVertical: heightPixel(20)
    },
    date_container: {
        marginTop: heightPixel(6),
        alignItems: 'flex-end'
    },
    date_row: {
        marginTop: heightPixel(5),
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
})

export default styles