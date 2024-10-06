import { StyleSheet } from "react-native";
import { appShadow, heightPixel, width, widthPixel } from "../../Utils/helpers";
import colors from "../../Utils/colors";

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    seperator: {
        height: heightPixel(10)
    },
    status_text: {
        color: colors.primary
    },
    item: {
        height: heightPixel(46),
        width: width,
        backgroundColor: colors.white,
        borderRadius: heightPixel(7),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: widthPixel(20),
        ...appShadow
    },
    list_content: {
        paddingHorizontal: widthPixel(10),
        paddingVertical: heightPixel(20)
    }
})

export default styles