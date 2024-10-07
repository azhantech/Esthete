import { StyleSheet } from "react-native";
import { heightPixel, vh, vw, widthPixel } from "../../Utils/helpers";
import colors from "../../Utils/colors";

const styles = StyleSheet.create({
    button: {
        marginVertical: vh * 3,
        width: "90%",
        alignSelf: 'center'
    },
    error: {
        color: colors.red,
        marginTop: 5,
        marginBottom: 10,
        width: vw * 85,
    },
    container: {
        paddingHorizontal: vw * 10
    },
    status_text: {
        color: colors.primary,
        textDecorationLine: 'underline',
        alignSelf: 'flex-end',
        marginTop: heightPixel(10)
    },
    images_container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: heightPixel(30)
    },
    image: {
        height: heightPixel(134),
        width: widthPixel(144)
    }
})

export default styles